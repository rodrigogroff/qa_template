using Entities.Api;
using Entities.Api.Product;
using Master.Repository;
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

        public SrvProductListingV1(IDapperProductRepository _repository) 
        {
            repository = _repository;
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

        public bool Exec ( LocalNetwork network, DtoProductListing request, ref DtoProductListingResult ret )
        {
            try
            {
                if (!ValidadeRequest(request))
                    return false;

                using (var db = GetConnection(network))
                {
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
