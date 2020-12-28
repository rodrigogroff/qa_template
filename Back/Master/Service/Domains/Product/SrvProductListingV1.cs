using Entities.Api;
using Entities.Api.Product;
using Master.Repository;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Master.Service
{
    public class SrvML_ProductListing : SrvBaseService
    {
        #region - multi-language - 

        List<List<string>> multi_language = new List<List<string>>
        {
            new List<string> // english
            {
                "Ops, something went wrong", /* 0 */
                "Invalid parameters", /* 1 */
            },
            new List<string> // spanish
            {
                "Ops, algo salió mal", /* 0 */
                "Autenticación de usuario no válida", /* 1 */                
            },
            new List<string> // pt-br
            {
                "Ops, algo deu errado", /* 0 */
                "Parâmetros inválidos", /* 1 */                
            },
        };

        public string getLanguage(int? indexLanguage, int messageIndex)
        {
            if (indexLanguage == null)
                indexLanguage = 0;

            return multi_language[(int)indexLanguage][messageIndex];
        }

        #endregion
    }

    public class SrvProductListingV1 : SrvML_ProductListing
    {
        IDapperProductRepository repository;

        public SrvProductListingV1(IDapperProductRepository _repository, IMemoryCache cache) 
        {
            repository = _repository;
            _cache = cache;
        }

        bool ValidadeRequest(DtoProductListing dto)
        {
            #region - code - 

            if (string.IsNullOrEmpty(dto.sTag))
            {
                Error = new DtoServiceError { message = getLanguage(dto._language, 1) };
                return false;
            }

            if (dto.page == null)
            {
                Error = new DtoServiceError { message = getLanguage(dto._language, 1) };
                return false;
            }

            if (dto.page < 0 )
            {
                Error = new DtoServiceError { message = getLanguage(dto._language, 1) };
                return false;
            }

            if (dto.pageSize == null)
            {
                Error = new DtoServiceError { message = getLanguage(dto._language, 1) };
                return false;
            }

            if (dto.pageSize <= 20)
            {
                Error = new DtoServiceError { message = getLanguage(dto._language, 1) };
                return false;
            }

            return true;

            #endregion
        }
        
        public string GetCacheTag(DtoProductListing request)
        {
            return request.sTag + "_" + request.nuCategory + "_" + request.page + "_" + request.pageSize;
        }

        public bool Exec ( LocalNetwork network, DtoProductListing request, ref DtoProductListingResult ret )
        {
            try
            {
                if (!ValidadeRequest(request))
                    return false;

                using (var db = GetConnection(network))
                {
                    var tagCache = GetCacheTag(request);
                    var cacheOn = !string.IsNullOrEmpty(network.cacheServer);

                    if (cacheOn) {
                        var result = GetCachedData(tagCache, network.cacheServer, 1);
                        if (result != null) {
                            ret = JsonConvert.DeserializeObject<DtoProductListingResult>(result);
                            return true;
                        }
                    }

                    var lstProd = repository.GetProducts(db, 
                                                         request.sTag,
                                                         request.nuCategory, 
                                                         (int)request.page,
                                                         (int)request.pageSize );

                    ret.totalRecords = lstProd.Count;

                    ret.results = new List<DtoProduct>();

                    for (int i = 0; i < lstProd.Count; i++)
                    {
                        var item = lstProd[i];

                        ret.results.Add(new DtoProduct
                        {
                            name = item.stName,
                            serial = "45445454564456546546"
                        });
                    }

                    if (cacheOn) {
                        var retStr = System.Text.Json.JsonSerializer.Serialize(ret);                        
                        UpdateCachedData ( tagCache, retStr, network.cacheServer, 1);
                    }
                }
    
                return true;
            }
            catch (Exception ex)
            {
                Error = new DtoServiceError
                {
                    message = getLanguage(0, 0),
                    debugInfo = ex.ToString()
                };

                return false;
            }
        }        
    }
}
