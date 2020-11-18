export default {
    data: {
        "_scroll_id": "DnF1ZXJ5VGhlbkZldGNoAgAAAAAAAAAYFkZ3U0doUUFfUzZ5dTRBWlN0cGRkYWcAAAAAAAAAJRZERjJsV2l3elF5QzVOZ1dQd0FOaUJR",
        "took": 4,
        "timed_out": false,
        "_shards": {
            "total": 2,
            "successful": 2,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 225,
                "relation": "eq"
            },
            "max_score": 0.0,
            "hits": [
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "U-3Y-NLwK29avyjE9dvW5YruTIjlNjyD",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.421397Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.525106Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 99451,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/U-3Y-NLwK29avyjE9dvW5YruTIjlNjyD/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 36765,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/U-3Y-NLwK29avyjE9dvW5YruTIjlNjyD/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 31307,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/U-3Y-NLwK29avyjE9dvW5YruTIjlNjyD/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "extension": "pdf",
                            "filename": "71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.32,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:50.917222",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.700900",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 3.25,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:01:57.338229",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.61,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:45.781674",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.88,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:19.133297",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.57,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:06.430337",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 1.9,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:20.640653",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.53,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:25.909527",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.4,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.108008",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.28,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.323102",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.36,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:40.599619",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.74,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:46.081656",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.31,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.343792",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 2,
                            "length": 9,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "9Bhl0XcJdV101EgbP3FAa2CgTk-yA451",
                            "content": " Expected delivery January 4, 20XX Recent progress ● Lorem ipsum dolor sit amet ● Sed do eiusmod tempor incididunt ut Overview labore et dolore magna aliqua Biggest risk Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-object-detection": {
                                "count": 2,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.508,
                                        "bbox": [
                                            0.4869,
                                            0.0,
                                            0.9892,
                                            0.0,
                                            0.9892,
                                            0.9974,
                                            0.4869,
                                            0.9974
                                        ],
                                        "label": "Tubed packaged goods"
                                    },
                                    {
                                        "score": 0.507,
                                        "bbox": [
                                            0.5035,
                                            0.0051,
                                            0.9952,
                                            0.0051,
                                            0.9952,
                                            0.9834,
                                            0.5035,
                                            0.9834
                                        ],
                                        "label": "Packaged goods"
                                    }
                                ]
                            },
                            "gcp-vision-label-detection": {
                                "count": 8,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.976,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.932,
                                        "label": "Orange"
                                    },
                                    {
                                        "score": 0.903,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.883,
                                        "label": "Product"
                                    },
                                    {
                                        "score": 0.773,
                                        "label": "Line"
                                    },
                                    {
                                        "score": 0.685,
                                        "label": "Brand"
                                    },
                                    {
                                        "score": 0.529,
                                        "label": "Brochure"
                                    },
                                    {
                                        "score": 0.515,
                                        "label": "Graphic design"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 34,
                                "type": "content",
                                "content": "Expected delivery January 4, 20XX Recent progress Lorem ipsum dolor sit amet Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Overview Biggest risk Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 34,
                                "type": "content",
                                "content": "Expected delivery January 4, 20XX Recent progress Lorem ipsum dolor sit amet Overview Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Biggest risk Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.994,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "KPHLOPPADPCNFIPPJDEIPBNPBPOPDPPOBEPPPBPPCPBANBEGPPHPNHLPPPEPHLLDPCMPPOFFIPIBPPPPFCAPKPKPPECDKNPPAGPPKPHCPDINDFAHPPPEKPHBIPPMLPPJPMPCPJPPDCPPPGHPBBNGAPCGPIPEKPFFBCEEPPCPPDGPPPBLLJBPGPPCOJPJNCPPPPCFHEPKDPPPJMKOPPBPPCPKPDPDCPBPOFGAPIPPBPNGCGPDBMPEHEEPPLPAPBIDHGPPPMPPPFOCPHEFPBHFPKECPHFPPPPMPIMGPMKDPPECPKLGCHPPPKAFDPIEGPPHDAPLPGCEPNAEFPGPHPCPFPBPFDPGBGPDPBDIAKGENACJPBEFPOPPLAFPMPPMGPEPPHKCIAAIIEMEHBPDPFOJMENFLCPIOPPPAFAPGPFOHPPFPBNJHPPJNPKBBMGPAPPAPIDPCJCNPIPNLPCBPBCPECEPHPOPDFFJAOAPDKGPPDPPHGLGPPOPPPEHPPPPKAPABCAGJPPPIPDMPPIHCCPPPKPKPABHPLKPFPPEBPHEPFBIJPECAPPBMAGPBMFFPMBGNPMHCPEPIPPDPMBEEJPPPPPHBCBPENBCNPPEPCPBNDNDEABKIIDCLPPBCFKIPEGPBNPBPIKPBLPGCAFPPIHCEPPDDEPPPCBJODPPHBPFPMPPPEBCHEPPKAFPIKCJJFBMABIEKPAGFAGHCACMPACPPLPPNLFEAMBJEDJPACIEPPBEFPFALPBEJPGMPOPPHIPBPMAPCPPPCPAPMLAPPGDPNNPMDDHPBHPDAMFPIHPLAAPPEPPBEMPADPPHPPPJNICDPPLPOBDPAACCPCCMBOPPPGDODHPBPNGODLNKPCAPBFPPLPNCPBHCDOCGAPCIPKCPCHPDNLNGAADGAHGAADDPPBEJPFHFIFFEDBCGIIAPBPNCPCJPDPPPPPHBGPAMPIPPJPPPPDPBAPMPBGDALPKPHCHKGBMBCNLPMJGNDMPFCPPPBGPPPPKBPEPKBABAEPBPMCPCPPMDKAPFIPPIPPPPPHPDDPPPPKFPHPPNMPCKPKMLPGPPPJIOGDKPEBPLPOPPCEEAPEPPPHGHHCPABPPBJKOPPDIMMPKAIAPPPDPIHGDGEABHIPAABPPPPPPPPPIBJPLBJGBDKIEPOBCIPOJPPMAPGDEBPPPPADECKPGPPMPPDOEPHGMPJOPPPDCPPGPCEEBFIPPGPMIPPKAAFPPJPOIJALMABPPIPBPDADPJHPPPPGKHIAAAAPGKPKNAEAJBKPPCNPPCJFPDCCNJAGNPIFPHEBGNPPNKPPCMEBPPCBDKPPPOHLOBDAMPEHLADIFPBBJEJBLKPLAIFPBEPGJFPPMLHBICBMBPCAAJEAOPPKPAMPGKAKJBGFCIPJPPCPJJKPBPCCPEBOCECLPOPPPPIIPPPBHPNDOEJPPJHCPAHPLPGAPFPDGPFDHPGPPPPFAPKAPAPPHEPPBCAAPDPBPCBBPCFDEGPPBGAPKHEDPECJIPCPPKBBDDAPBLBCBCPIBFOCJLPPHBPPPOPPDPGPGOPHINMPEABBPLLNDIGDNPPBHPPPPPMNPPNNJPPGPLEMPOPAPPNPPDGEPDBPGPPDBPBDAAKAPIDEBHPPPLDLDKEPGDEDBPFPPBEIPLIFPLAHGPPEKFPNJPBDPPDBPIAJPNIGBDDKAPPPCJKKPGEGDLNDPEJNPJPPPFIPPALOPELAAKPEKPPJGBOBFHEAPGBODOIPMKIPHMKGFPBDCDPNHPPNCHHFLKFPPPJFJGMPPAPPJPPDPPPNFHPPDIEPPDFPEGHPOJMEBOPKBPBMKPIPDKPPCPPHPCAAAPEEPPKPPBBCHAGBPPPLEDFAFBBMKPCBMLBDKDEGBGEEIPGNPBIPFLOJJPJPCPLGHLPHNPOEBKDOPHCBPAAEPKCJGEBPCCPPDODPPPPOGKPNPGPPKPAMAEPPKBJBPAPPPHJFPPPPPCPMPPPADPGGPPLPPPDGKPEAPDPBFPPAAPOADBPEPIJIPCPPKPBEBPBBPCBKPPCIPEPCOE"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "lzXcJ5QIrQjwwuhJI0-cyeaMfwiPtleA",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.430267Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.525688Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 110944,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/lzXcJ5QIrQjwwuhJI0-cyeaMfwiPtleA/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 42823,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/lzXcJ5QIrQjwwuhJI0-cyeaMfwiPtleA/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 41878,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/lzXcJ5QIrQjwwuhJI0-cyeaMfwiPtleA/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "extension": "pdf",
                            "filename": "71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.32,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:50.916788",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.700266",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 3.12,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:01:57.210743",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.91,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:44.532322",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 1.26,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:17.368343",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.63,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:06.488866",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 1.84,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:20.581088",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.54,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:25.924951",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.31,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.024895",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.26,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.298946",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.31,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:40.549699",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.61,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:45.948946",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.35,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.365650",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 4,
                            "length": 9,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "9Bhl0XcJdV101EgbP3FAa2CgTk-yA451",
                            "content": "Progress - Topic area 2 Accomplishment 1 Accomplishment 2 ● Lorem ipsum dolor sit ● Ut enim ad minim veniam, amet, consectetur quis nostrud exercitation adipiscing elit ullamco laboris nisi ut aliquip ex ea commodo ● Sed do eiusmod tempor consequat. incididunt ut labore et dolore magna aliqua. ",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-label-detection": {
                                "count": 4,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.989,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.926,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.85,
                                        "label": "Line"
                                    },
                                    {
                                        "score": 0.546,
                                        "label": "Number"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 46,
                                "type": "content",
                                "content": "Progress - Topic area 2 Accomplishment 1 Accomplishment 2 . Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 45,
                                "type": "content",
                                "content": "Progress - Topic area 2 Accomplishment 1 Accomplishment 2 Lorem ipsum dolor sit Ut enim ad minim veniam, amet, consectetur quis nostrud exercitation adipiscing elit ullamco laboris nisi ut aliquip ex ea commodo Sed do eiusmod tempor consequat. incididunt ut labore et dolore magna aliqua."
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.901,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "BPEJPPPCHPKPACPPPICGBAMNBPPPDKDFAPPPHDPPGLCELABCMPEPMAPPPPHPBPAHPEJPOAAKEPELPPPPNBFPPGCPPDBBOPPPAHKPHPHBPNDPMCAAHPPHPPJBBPLCPPPMPMOAPCOPIGLPDAIPADEAAPBPPLPKKPCFAAEIFHDKPMPPFCBPPJHOFMPIICOEPEPPPPBHCBPNOPPIANOJPPDIPBPGPBOABPAPJDPDPOPKANPLAPIBFMPMLDCOPIMAPEKFGJPPPKIHNPIBPEHIMADHPELLPPHPPHBIJPPJPIHDPPIFPIHFBPPPPLAIABEDHPPIBAPNDNABNIAELPHPCPAPDPAPHAPJBPOHPHBBANFAPAEJFBIHPBPPDDPPPGPADPCPPGNDNBBIAAJBBAPCPCKOIJPLBGPFPPKNJPALEGBNBEPPPAHABPPGKNMDAAFPAPPPPJFOAOAKPJPLMHEBPBDPDGJPDPOPBFCDDPAPBPAPOEPHEGGIOPLPOPDONPPPPAPAAAACFPPKBHHFPGFDEDPPMHPPPABPLEGPAPPOFAEFPDGLINAOAPPEPKENEEMIPPBPAPFAAPFPKGPFJDBBFPPLPPAMEFFPFCBBCPECPDBIOEPCAAEOGPBAPNPCEEIELOPPEEPFPPENCNPDBAOPKEFDAPPAADMGPAFDPCPNOEFLGCBPPOAFPBPPJEJPFOCCFHAJAAAFMBCBAADMCACOJABPPFPFCDEEAPGBAFEMBJPEIABKIKPBMPACNLENPIPPIPKBPBAPBPPMBPCPGPBPPICPHCPMBOEPBGPGAPMPLKPDAAPPEPPBPMPAEFPJPPPLPAAGPNAPIFCPDBCPFFMKCPPNPEHCDIPELPJONPPPOPAPHCFMEMGBPANAHBACBPODDDDPAAOBMOFDCBPKBADAAGBPCDHDPIKMPLJDAAADFBAPEHGEPFPPAIPGKLAAFKAJPIPPGIPPPBJAAFMPDHBAPPLCFADHFDIGNHGMHIKHAPPIAIIHGBPPPNDBPNPMFACCAGHPNGJAPPPPKAPPCPLGPPPAPPHAJPPLPHEPPJPEPPBPPKMEPAKJPBMIHAEFDAPNKPPPIENCPBPPDPCFOAPEBPECHKKPPKCIJPODJAPJPBPCFBBDDDEBBPAEDAPPPPPPPPDDAKIAJIBDLPOPKADKOAIJPLDPGGBAKPPPAPFBCKHPPBKLBPPNIEIPBMPPGBEPPPMGDIHLELLCNDGFINAKBPPHILCICFCGBBPGKAMDCCPBKPPPPCACFCBAFPIEPOIDPFEBPOKHNPHBKKPPBAOICBDPPEPGPAPPIPPMFPAMMGPPDBCNPPOGPCJADBPNAKAAABHNBBJNHAPOPIGMEPPLIDMDKPFACCDBDGDPCAADHGKPPNPAKPPPCKPBFHLPPCKPAEJDFPCPHKLIDPAPAPGMPBPPPKPIPIFPJDPKEPPDAMLBGMJMBBOCKAEPOPBIFFBPPDFPGAPAPPPBPPAMAAPAPAPABAIAFBCGPPCMBJDHFPPGFMDEAPPMHAFGAPAIJLANPECFMMFPJOIGPJPMPLEPIBCPNILPGPEALANPGJALEPNPIBBPPHNJPFJKHDLOCLJPJPPPPBPPEPPGDDPCAPNPPECPHBCBMAPABDDCEPPFIAAEJPPDABBPDGLAHFPELBPPABMPIDCAPPBMAEPPBBPFPPPPPKHAAEFJPPEFPCPOHFIEPBOKBPPOLCPBHPPABCPBJBBPPKKPNECBJFIEKFFJDNDLPPBKKPGEDPFPAPDCLPLPPPCDGMKMPPPEPBDFPCPFPPLEMKLPLMDLFFGPFOKDEPFOOPPMPDDPIPAPBCAPCPHGPGOPPPEGACAPCHPPJOLADBLALEPCPKPKBDEHBIDPMDMHFCHJCABKLHMMCGPEMHBIPDOOPPMPPFLDPGCPPGBLFEPECAPAGFPDBPFCAPAFPMGPCNHPBKBNPAMBPIJPAMFANPJBJCPBJPPFENPPPPPKPKPLPAHPEFNPKPPPGFPOLAPFNKPHPAKPPAHDPKPEIINJPPGKGDDPDAPMAEPPINPJMGLB"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "I2Mxlcs0Hctd4oW5W7uAVhmNhNS83PMZ",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.426068Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.526014Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 110716,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/I2Mxlcs0Hctd4oW5W7uAVhmNhNS83PMZ/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 42773,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/I2Mxlcs0Hctd4oW5W7uAVhmNhNS83PMZ/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 41778,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/I2Mxlcs0Hctd4oW5W7uAVhmNhNS83PMZ/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "extension": "pdf",
                            "filename": "71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.33,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:50.926385",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.706255",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 3.17,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:01:57.268642",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.64,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:45.171631",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.89,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:18.255658",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.59,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:06.451259",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 1.92,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:20.660169",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.62,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:26.008222",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.35,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.071000",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.23,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.265626",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.39,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:40.623906",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.69,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:46.029135",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.41,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.429212",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 3,
                            "length": 9,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "9Bhl0XcJdV101EgbP3FAa2CgTk-yA451",
                            "content": "Progress - Topic area 1 Accomplishment 1 Accomplishment 2 ● Lorem ipsum dolor sit ● Ut enim ad minim veniam, amet, consectetur quis nostrud exercitation adipiscing elit ullamco laboris nisi ut aliquip ex ea commodo ● Sed do eiusmod tempor consequat. incididunt ut labore et dolore magna aliqua. ",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-label-detection": {
                                "count": 4,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.989,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.924,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.85,
                                        "label": "Line"
                                    },
                                    {
                                        "score": 0.546,
                                        "label": "Number"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 46,
                                "type": "content",
                                "content": "Progress - Topic area 1 Accomplishment 1 Accomplishment 2 . Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 45,
                                "type": "content",
                                "content": "Progress - Topic area 1 Accomplishment 1 Accomplishment 2 Lorem ipsum dolor sit Ut enim ad minim veniam, amet, consectetur quis nostrud exercitation adipiscing elit ullamco laboris nisi ut aliquip ex ea commodo Sed do eiusmod tempor consequat. incididunt ut labore et dolore magna aliqua."
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.894,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "BPEJPPPCHPKPACPPPIBGBAMNBPPPDLDFAPPPHDPPGLCELABCMPEPMAPPPPHPBPAGPEJPOAAKEPELPPPPNBFPPGCPPDBBNPPPAHKPGPHBPODPMDAAHPPHPPJBBPLCPPPMPMOAPCOPIFLPDAIPADEAAPBPPLPKKPCFAAEIFHDKPMPPGCBPPJHOFNPJICOEPEPPPPBHCBPONPPIAMNJPPDIPBPGPBOABPAPJDPDPOPKANPKAPIBFLPMLDBOPIMAPEKFGIPPPKJHNPJBPEHIMADIPELLPPGPPHBIJPPJPIHDPPIFPIGEBPPPPLAJABEEHPPIBAPNDNABNIAELPHPCPAPDPAPHAPKBPOGPHBBAMFAPAEJGBIHPBPPDCPPPGPADPCPPGNCNBBIAAJBBAPCPCKOIJPLBGPEPPKNJPALEFBNBEPPPAHABPPGKOLDAAFPAPPPPJFOAOAKPJPLMHEBPBDPDGIPDPOPBFCDDPAPBPAPOEPHDGGIOPLPOPDONPPPPAPAAAACFPPKBHGFPFEDEDPPMHPPPABPLEGPAPPOFAFFPDGLINAOAPPEPKENEELIPPBPAPFAAPFPKGPFJDBBFPPMPPAMEFFPFCBBCPECPDBINEPCAAEOGPBAPMPCEEIELOPPEEPFPPENCNPDBAOPKEFDAPOAADMGPAFDPCPNOEFLGCBPPOAFPBPPJEJPFOCCFHAJAAAEMBCBAADMCACPJABPPFPFCDEEAPGBAFEMBIPEJABKIKPBMPACNLFNPIPPIOKBPBAPBPPMBPCPGPBPPIDPHCPMBOEPBGPGAPMPMKPDAAPPFPPBPMPAEFPJPPPLPAAGPNAPIFCPDBDPFFMKCPPNPEHBDIPELPIONPPPOPAPHCGMEMGBPANAHAACBPODDDDPAAOCMNGDCBPKBADAAGBPCDHDPIKMPLJDAAADFBAPEHHEPFPPAHPGKLAAFKAJPIPPGIPPPCJAAEMPCHBAPPLCFADHGDJGMHHMHIKHAPPIAIIHGBPPPNDBPNPMFACCAGHPNGKAPPPPKAPPCPLGPPPAPPHAJPPLPGEPPJPEPPBPPKLFPAJIPBMIHAEFDAPNKPPPIENCPBPPDPDFOAPEBPECHLKPPJCIJPODJAPJPBPCFABDDDEBCPAEDAPPPPPPPPDDAKIAJIBDLPOPKADKOAIJPLDPGGBAKPPPAPFBCKHPPBKLBPPOIEHPBMPPGBEPPPMHDHHLEMLCNDGFINAKBPPHILCICFCGBBPGKAMDCCPBKPPPPCACGCBAFPIEPOIDPFEBPOKHNPHBKKPPBAOHCBDPPEPGPAPPIPPMFPAMMGPPDBCNPPOGPCIADBPNAKAAABINBBJNHAPOPIGMEPPLIDMDKPFACCDBCGDPCAADGGKPPNPAKPPPCKPBFHLPPCKPAEJDFPCPHKMICPAPAPGMPBPPPKPIPIFPJDPKEPPDAMLBGMIMBBOCKAEPNPBIFFBPPDFPGAPAPPPBPPAMAAPAPAPABAIAFBCGPPCMBJDHFPPGFMDEAPPMHAFGAPBIJKANPECFMMFPJOIGPJPMPMEPICCPNILPGPDALANPGKALEPNPJCBPPHNKPFKKHDLOCLJPJPPPPBPPEPPFDDPCAPNPPECPHBCBMAPABDDCEPPFIAAEJPPDABBPDGLAGFPELBPPABMPJDCAPPBMADPPBBPFPPPPPKHAAEFJPPEFPCPOGFJEPBOJBPPOLCPBHPPABCPBJBAPPKKPNECBJFIDKFFJDNDLPPBKKPGEDPFPAPDCLPKPPPCDGMLMPPPEPBDFPCPEPPLEMKLPLMCMFFGPFOKDEPGONPPMPDDPIPAPBCAPCPHGPGOPPPFGACAPCHPPJOLADBLALEPCPLPKBDEHBIDPMDMGFCHJCABKLHMMCGPFMHBIPDNOPPMPPFLDPGCPPGBLFEPEBAPAGFPDBPFCAPAFPMGPCNHPBKBNPAMBPIJPANFANPJBJCPBKPPFFMPPPPPKPKPLPAHPEFNPKPPPGFPOLAPFNKPHPAJPPAHDPKPEJINJPPGKGDDPDAPMAEPPINPJMGLB"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "-U79QWj7lcH3Vy3EwDaj9SIsh3pD78oI",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.401965Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.526263Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 290460,
                                "name": "image_791x1024.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/-U79QWj7lcH3Vy3EwDaj9SIsh3pD78oI/proxy/image_791x1024.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 791,
                                    "height": 1024
                                }
                            },
                            {
                                "size": 89770,
                                "name": "image_395x512.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/-U79QWj7lcH3Vy3EwDaj9SIsh3pD78oI/proxy/image_395x512.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 395,
                                    "height": 512
                                }
                            },
                            {
                                "size": 77061,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/-U79QWj7lcH3Vy3EwDaj9SIsh3pD78oI/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 791,
                                    "height": 1024
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/8b27a054-c05b-4c8a-b3a4-2b4032e53599.pdf",
                            "extension": "pdf",
                            "filename": "8b27a054-c05b-4c8a-b3a4-2b4032e53599.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.31,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:50.904298",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.696874",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 3.65,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:01:57.743772",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.57,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:46.350856",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.89,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:20.024282",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.81,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:06.671581",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 1.83,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:20.578226",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.55,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:25.929117",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.33,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.047465",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.31,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.348877",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.51,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:40.753771",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.72,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:46.068146",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.45,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.468161",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "portrait",
                            "pageNumber": 2,
                            "length": 4,
                            "width": 612.0,
                            "type": "document",
                            "pageStack": "_ALrDpsrI8lkwAvDft9yoGq-rv83S6sq",
                            "content": " 2    Lorem ipsum dolor sit amet  THIS IS A HEADER  - - - - X Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse  molestie consequat, vel illum dolore eu feugiat nulla facilisis at  vero eros et accumsan.   ",
                            "height": 792.0
                        },
                        "analysis": {
                            "gcp-vision-label-detection": {
                                "count": 7,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.912,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.894,
                                        "label": "Purple"
                                    },
                                    {
                                        "score": 0.822,
                                        "label": "Sky"
                                    },
                                    {
                                        "score": 0.686,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.593,
                                        "label": "Landscape"
                                    },
                                    {
                                        "score": 0.579,
                                        "label": "Magenta"
                                    },
                                    {
                                        "score": 0.507,
                                        "label": "Brochure"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 77,
                                "type": "content",
                                "content": "Lorem ipsum dolor sit amet THIS IS A HEADER X Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 76,
                                "type": "content",
                                "content": "Lorem ipsum dolor sit amet THIS IS A HEADER Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.991,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "JFPANPHAFPHPFJCPPEKPPDPOCLEPAPPPHCPEHPEPPEPEPPPPHFBDABPPPPAPMCEBMIPPMPBPPPPAHPPPFBFPNPLPPDGLFGPPBGPPKPPDPDDPHFCDIPPCFPBEPPPBGKPAPPOIFPHPEEHPPEPEOKPCGCKPPMIAEPADAPFCPPELCHIIMPABJMEPPPPCPHCHPEPNNPKBBKPEALACPPOPPDKPPNPPFCKPEPMPLAHCPBPKOOPGPDIAGPHJPEIPPPPEPIGGBKPBPPPGKIHBPEGFGDLEPPIPMCAPPPLKEPHAPPGJPJNPMPKBGJNLPNMBGPCMMPPDAHPPNMEPPPBPMPBPPPBNPPFPCCPPDDCDPPDPCGEMDPKLEJLEMJPNAJPHPOELECCPPPLBPGBPCHMKMBPEPGPEPEPOPCPBEPPPAPPDEPFPAKHFFDEEPPPPCPGJDPPPJPPBPEHCHGPKPFPIPJPPPAALBAEPMPPMPDGPAOGNEPPPPFPPCCIAPPOLPPBEPPPPOBPDEADEMPOPBPGCPPPNLNKPPBPPPFMCGPEPPEJGCHODPPCPPBFGILPPCPPPBPLCPLECPPPBCPPPPPJBGIGECPPPPPOGHGGPEANJCMPDPIPGBLPFPPMODPPECPPBBPGIPAPPCPPLKLPHBJPBFDHPPOPEAPPAPAPPPNANHOPCPLNBPPPEPPBDJDOPPDFPJPAEBPMPACDMKPFBCAOKAPEJBPFPPFKJPLCMPMHPPDHFIBMPPPALPPCPMDDNPNHPCAPKPPNCPPLPPPKGBKCPPGAKPAIBALPPFEDPAJPCACEOHKOPDBOPHPPOJDDMPPDHFPPIBPBCFPIMPDCLLPBCPGAPBPPPCEPLICHCPPPPPPEPPCBEDPOKPPLLPPBICPIILPHAPKEPPLBAHBAICAFPABDACKBPPPGDOOIPPKPFPHJPDBMECPPJPHPPBGPPPPPDDPECDNCJPPDNPPPPAEPDIJJDGPGBFJGDFEDEMPPJPHDPGGPPFPPCPMPPPPCCPPPDAAHBAPCPCLNBPIOBPGPPNPKBPLPPPGPANPPPPDPHMPPKICACPPPPDIIPPFDPPACPPPPCKIPJDAADFPPPPFLDNCPIAPPHPPPFPIPEPPBHAAPPGCMHNCPHADBBCPAABAPKPPPPPPPCIPPBEBKGDIIPPEFJPDCPIIBPDEPEPOPLMFPGEDEPPNIPPPPJCKPPFAGKPPMPPPKPIHDBPPPPPPPEJNHBPPOBKAAJLAPDOPPPPBLBPGPLCPPPHPAMBPHBACJPBHPGBEPLHPPCPNMFGPPHAFOKPHDPKDEPPBPPKKHKPPAPBAPPCDAKPPPOGLDJEDMILOIFGIHPJBLKCOPFPDCPNPGPLPFPPJOPHHHCPENPAKPGPFPPPIPIPPJPIIHBGMLOPPPPBIPPCONPBPLIJNFBIKOCPPPPCAPOPPHPJPPPPFPGDHPBAJPHPALDPPMPPBBDPPEEPKOPCAPHPJBBPPGPKBPGKCGNPAENBPKLPPFPPJBPPGPCEBGHJPPIGBOOKPPOGPCJPICOHPPMPEJFPPHPPLPHPPDPKDPJAPBLBNPKKAELBKJPPAJPPPPNAPPJPJIFLAPFPPPBPEPPPPMPBCMPGNBPPJIIGIEAPBPPEGDEDNGFDMEMPCPPEDBGPPPAPPPGIAILBPJPPLPPJJPPBPHPNBEPDPPDPKHIPIAPJPCPKPOPNPPNOAEEPPPDPCJPENPAPPJPKHGGPKHPLHPAPAOMPOPPPPKCOPMPGPKDBIANADEHPGDAMCLPNEOCHPPPJAPPPPGCHGKPPPPIPOPPPPBPPPPCJPHCOKLPPPHPOPDJBPNNAMEOPNPPPHPPAAAPEAPPNNPIPKPPDBIPPPIOKEACMPEOCKGCPAFOFBAAAPNPEPPDOPIJPFMFFPPNLPANPFEPMDAFDOKFPEPAEEPHDIEPPPMMPPAPIMLPPPLIPOPJOPCPFBPANPBAFABFPMPAKPPPPPPBPCPBPBPHMNPPKDPPDFPLBCPBOCAPPFGOGDAEJPMPPNPPPJIOCDAPFEPEEHPPLPDBPPHM"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "guqQS6huxPpIrCNBd-Agd0I4wYuL8Aul",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.450123Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.526518Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 102693,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/guqQS6huxPpIrCNBd-Agd0I4wYuL8Aul/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 42957,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/guqQS6huxPpIrCNBd-Agd0I4wYuL8Aul/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 32737,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/guqQS6huxPpIrCNBd-Agd0I4wYuL8Aul/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "extension": "pdf",
                            "filename": "71b16f65-802c-4e9b-8448-022d50d3ec2d.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.1,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:51.002906",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.724380",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 2.82,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:02:00.088185",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.62,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:46.968482",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.88,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:20.908363",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.48,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:06.911024",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.45,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:21.033362",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.48,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:26.387072",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.28,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.303240",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.27,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.533861",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.37,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:40.968086",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.7,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:46.647065",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.28,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.645351",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 9,
                            "length": 9,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "9Bhl0XcJdV101EgbP3FAa2CgTk-yA451",
                            "content": " 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit Goals for next 2. Sed do eiusmod tempor incididunt ut labore meeting 3. Ut enim ad minim veniam, quis nostrud exercitation",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-label-detection": {
                                "count": 5,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.971,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.924,
                                        "label": "Orange"
                                    },
                                    {
                                        "score": 0.885,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.798,
                                        "label": "Line"
                                    },
                                    {
                                        "score": 0.662,
                                        "label": "Brand"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 30,
                                "type": "content",
                                "content": "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit Goals for next meeting 2. Sed do eiusmod tempor incididunt ut labore 3. Ut enim ad minim veniam, quis nostrud exercitation"
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 30,
                                "type": "content",
                                "content": "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit Goals for next 2. Sed do eiusmod tempor incididunt ut labore meeting 3. Ut enim ad minim veniam, quis nostrud exercitation"
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.997,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "MOGNPPPADPCLDEPPLBCIJCPPAPNPHPPLCFPPPDPPFMCBPAHILPGPNGOPPPGPCMLCPDJPMMDNHPGCPPPPGFAPOPKPPGBELNPPAFPPNPDEPDHKFDADPPPGIPHBJPMPLOPIPLPCPHPPECPPPEGPBDLFAPBGPJPEKPIFBBGHLPCPPFIPPLBPLHDPDPPCPIPFOEPPPPDFIDLPCPPPFMIOPPAPPEPJPDPCBPBPPFFCPGPNAPPHADPCBIPJCGBPPHPAPBMDHIPPPJPMPEPEPKFFPCHFPGEDPGCPPPPLPKIKOPFCPPGAPLJKGJPPPKAEDPEDEPPIEAPNPFCEPPCDJPHPFOAPFPAPFDPJAJPCPCBGAMGGMADKJCKFPMPPJAIMKPPMIPCPPFFAHCAHGBJFGBPCPFPMPEODJCPHOPPPDIBMFPFJIPPCPELJGPPFLPNBCNDPBPPAPHEPCHBPPJPMNPCBPABPHEEPHPIPDEFLAPAPDHGPODPPGBLDPPKPPPEGPPPPMAPABDADHPPPHPCMPPKKEDPPOOPMPACNPNMPCPPICPFHPDAIIPFBBPPALDFOBPFFPMAKJPODCPEPIPPCPOBEDOPPPPKFBCBPENBBKPPEPCNBNEHEBABPPKDCOPPBBHKLPHDPAKPDPHNOBMPHDAIPPIFCCPPCDEPPPEBEOGPPGGPNOLMPPCBHJFPPKAGPGMBGHEAMABGDPPAHBAHJBABJPACPPMPOMHIIANCEGBGMBBHFPLCEHPGBKPAKHPIJPKPPEFPAPKAPBPPPCOCPMMAPPIFPKKPNECEPCIPEAHDPKKPGAAPPHPPBCMPAGPPKPPPJPDADPPJPMDCPBBBDPBEMBMPPPHCJDKPCPPFPFONIPEAPBDPPKPOCPDIDBKBCAPEEPHCPCFPFLKPJBAEIAFKBAHDPPBFIPEHIGGHGEABJFFAPCOPFPCPPEPPPPPGBGPANOHPPGPPPPDPCAPLPGGBBLPKNICIIFBPBIPKOPIJMBOPGBPPMCDPPPPJCPEPJBACACPBPJDPAPPPELBPJHPPIPPPLPJPBGPPPPFHOHPPNOPEFPHNLPFPNPHFNGANPGAPPNMPPDDFAPCPPLGFIICPBBPMBPNPPPEHKNPKBFAPPPDOFKIAEGABGHPAABOPPPPPPPPJCGPIBJJBDKJHPLAEHPHKPOPCNDEFBPPPNAFECJPEOPNLPGNKPGHHPGOPPNDEPPKMDIDCHMOPFPPHPPJAAEPPGPNFJBGGABPPHPAPDBGPIGPPPPEKHJAAAAPNGPMLAFAKCMPPEMPPCPFPBACNKADNPJFMHGBKPPPPIOPCHHCPPBBCLPPPMIIPBFAPNEGJADFHPABEDKCLNPKALHPCELKHGPPKKICGDCPCPEAAJDAPPPPPAPPKMALLBHGCHPGPPAPPIMPBPGCMCBNAFBPPOPNNPGGPNPFEPLEPGIPPOEDPAEPMPIAPDPBEPHEDPFPPPPGBPLAPAPPLDPPCCAAPFPAPBBBPAGEGFPPCEBPJKIDPCBJKNCPOJDBDDAPAIBDBHPGAEODGHOPKBPOPJPPCPGPDLPGGNKOBABBPMJPFFECJPOBFPPPPPNKPPLOJIOHOHFNPIPCPPJPPFJFPDBPJPPHBPBCAALAPFACBHLPPKEJCLDPMEEFCPAPPADDNOKGPMAFEPPEJGOPHPAEPPDAPJBOPMMHEGEHBPPPAILGPGDGHLPBPHKPPJPLPEIPPAKKPEJAAKPDIPOKIBLBFDGANGBODNGPKMIPEMGIFPBGBBNOFPPODFFFKFFPPOIEJLPMOAPPPOPFPPPMFFPOFGEPPDFPHHDPPHPHBPPIAPCKLPKPCKPMEPPGPCAAAPDEOPJPPBDBHAGAPPPMFFHAFBCMOPBDPIDDKCFDCFFDGOFKPBGPDPOMKPLPGPKEEFPJIPOIAGCJPKDBPBABPMGFDHCPCCPPDPEPPMPLJLPPPEPPIPAPABPPJAGAPBPJPFHIPPPPPDPIPPPAEPICPPMOPPCHOPEAPEPCNPPBCPPACBPEPJKFPEPPGKCGBPBBPCBHPPBIMGPCNF"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "NxZBr_CLg5kwQ5qnBPGS_gzkB5-fB-MZ",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.471711Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.526730Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 498058,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/NxZBr_CLg5kwQ5qnBPGS_gzkB5-fB-MZ/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 139185,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/NxZBr_CLg5kwQ5qnBPGS_gzkB5-fB-MZ/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 149182,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/NxZBr_CLg5kwQ5qnBPGS_gzkB5-fB-MZ/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "extension": "pdf",
                            "filename": "fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.58,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:51.508053",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.02,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.723666",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 3.09,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:02:00.299843",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.68,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:47.652838",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.9,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:21.806293",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.48,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:06.929002",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.5,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:21.089505",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.58,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:26.505373",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.48,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.530875",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.27,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.618565",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.51,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:41.262603",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.55,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:46.634655",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.32,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.662918",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 6,
                            "length": 20,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "C8ZqRtOAzQKwXKeJmsXVUnZevSh1gQiP",
                            "content": "Understanding the market",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-object-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.814,
                                        "bbox": [
                                            0.0456,
                                            0.0941,
                                            0.9887,
                                            0.0941,
                                            0.9887,
                                            0.9904,
                                            0.0456,
                                            0.9904
                                        ],
                                        "label": "Building"
                                    }
                                ]
                            },
                            "gcp-vision-label-detection": {
                                "count": 8,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.894,
                                        "label": "Yellow"
                                    },
                                    {
                                        "score": 0.837,
                                        "label": "Architecture"
                                    },
                                    {
                                        "score": 0.699,
                                        "label": "Material property"
                                    },
                                    {
                                        "score": 0.686,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.659,
                                        "label": "Metal"
                                    },
                                    {
                                        "score": 0.627,
                                        "label": "Steel"
                                    },
                                    {
                                        "score": 0.601,
                                        "label": "Ceiling"
                                    },
                                    {
                                        "score": 0.501,
                                        "label": "Car"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 3,
                                "type": "content",
                                "content": "Understanding the market"
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 3,
                                "type": "content",
                                "content": "Understanding the market"
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.329,
                                        "label": "freight_car"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "JFPHEPCDKPAPPOHNFPIBPHPPPOPPJOPPIPPPJAPIDOJHPPBPPLPLPKDPPPLHGPKBKAEPKPPODDPBCPPILPMAHPKPDPPCEPGPJKPPPGMEICIPBPACPPPAKAFBPPPPPDILKHPPNPGPPFEPPAPPMLPGPLPKNNLCGDIEPPBPPCBPPPJAJKJPPPGONPHPPNPPPPPHPGBOEIPCEPDAMPPPKPBPPGELPPNEIPHPPBPCHPPPHPJLPGPPPEDOHPFPPPPPNHFDCCPKPIPPPPFDPCCNLEPPJPFHEBEOEPPPPPFJEPPPPPFPPPMAIJMACMGPPPLEPPPAAHPMPPPGPPAFDPFPPKPPKPBPOAPPCPIBOHFPPAPPPPAHEBGCPPPPELJHKPHPPHALPPKEPHAPHNPCPDKPNBBAPPPBPJJNLMPFCPPPPPFPAPPPIAKPPPJPPPEDDKKAPAPJFKIPPMPPPPPKPPHCMMDJAAFPPPHFPCGPPIGPPNPFPPKPLOPPPKPMCDPPPJPKCPGPPPIJDPPIPPAPGPGNMEPPKAFPPBPAJPAPPFPPDKEAAFPPHPODPPPGPCMPPPPGPPALJPOPPNPPPPOCPPACMPPPDPPDJGBPCJPPDFPGJPMPLECPPPPADGPMGECAFLPEPKOKPPPJEPPBAOPECMANPPPPAPPPPKAPPDOFFFEAPKPAPPPPKODDDGPPPCKPPHPMPPDJABJPBPLPKPFPGPAPHEAOEPPIPPGBEPLJPMPPBCPPPPCPMGBKIIPFJMIOPPPJPPPGEPAPPPPIPPKPPABHPPFPLBFDPAPPGPPLFPPEACPPPPPPLHPFALKPCPJMGPPBPPHAAAFIKCOPBPPEPEGPKPPPPCKIEPGPPBNHGCDPPPPAEPPBAPFPPPBKPPLKAPOGPCFAPJPAEJMFFPCPLLMDBDPGAPLPPPMDILPMKJMBPDPPLPKPGEJPPPPPOPMPFPHOBPKHIBGPEAPPCPPJJPPFJDPGKPGENAPOCCPLLKPPPNPIPPPPBKOMGPNDPGPPPAAAAPHNGPEFPCPDNBBPPFGAPGPPGJLNEFJPGGPPBPCJBBDPPPJPPPNPPNPPLAJPPPJALPPCPKLGLPHPDKJPFOPCAPKNBPLGPPKPPPPLFOPCHFHBAEPPPCPPDPPBFPPBPPAOPPPPPLPPIPEPJKHGMPDPIHJPEJIGPAPNPPOPPPGPPPDDPPPPPPAEPPFFPLAPPFPPPPPJPJPAGPIEGKPJADACHHPPCJKPAPPBEEFPAEECGPIMFPMPBPPHECPPOPGDFDPIAJEADPPGPPJPKFCBMPOPBCBPANAPPEAPPCCFNGNLEKNNKCFPALPLAPJEKDCPKPPGPPHNPFOLPIHEPFCEPPDPPOIIPBGLBMPCAKPPEKKPFAPPDOKHPDNCFPPLPLAKPNPPFPPMPBAPPPPNNEPPJPJPPPIPFPPPPPPPPPHGDGPPMIPPAHPHOADCPPPPPDPNPPPIPEKNNNPFPDPFPPMIDPPMPBPPABGGLPPMPPIPAPBJAFBPKPPPBPPKOGCDGPPNPPFPPOLAPPNHNLBIFIIPBPPPFPNNPPPPLPJKBIPPNEMEPHMPKPPFPPPPPGPPPPPPHFPPODFHEIPPPIPPLPDJMOAPPGFEBHPPKALPAPPEDEODHPPFPMEHOEAPKNPOIPPPPPAPBPAFPOAHEBFPJPOPAICLAOPBBHIPCPAJEPAJPGJDLPHNAEPDMPIJPPHPEBPBPPFPAIBKGAPPPHACDAHPCHPPPPAPPENJKPCPPEPPMFIPPNLPFDIPFMLIABHPHCPPPPPPPMPPCFFPPPPPNOAPILPCLPCCPKCDPOPPKCGPCMPEPPDPPHCIPAJIHAPPKPPKDEPBEFPPPPPPJPAPPJPPJPPNEBEHKPCAAPCMIPAMGPGKEKNKBIGPKLMHPOGPPNGPPBPCAINFGAPGFPAIGDDAPPMDFIMPEELBPPACPKPPGPDPJMAPOPODAJPIPPCPDFEEPPNPFPPPEPPCOIPGJPPLCPLPNAEJHDJPPAEDNACABDPPMPCAPDPPHDBDAAKHEKPBBBPCEKPP"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "0wQjzYsNSVwyT9cneMie5y3z3G5peOg2",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.460359Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.527023Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 199544,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/0wQjzYsNSVwyT9cneMie5y3z3G5peOg2/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 62842,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/0wQjzYsNSVwyT9cneMie5y3z3G5peOg2/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 66656,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/0wQjzYsNSVwyT9cneMie5y3z3G5peOg2/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "extension": "pdf",
                            "filename": "fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.74,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:51.658505",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.734160",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 3.05,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:02:00.796042",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.63,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:48.925770",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.86,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:23.552856",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.59,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:07.257782",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.5,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:21.166887",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.56,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:26.570856",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.41,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.482518",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.23,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.556574",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.39,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:41.016731",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.74,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:46.809313",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.32,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.791617",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 3,
                            "length": 20,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "C8ZqRtOAzQKwXKeJmsXVUnZevSh1gQiP",
                            "content": "Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-object-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.507,
                                        "bbox": [
                                            0.2458,
                                            0.7966,
                                            0.7389,
                                            0.7966,
                                            0.7389,
                                            0.9734,
                                            0.2458,
                                            0.9734
                                        ],
                                        "label": "Shoe"
                                    }
                                ]
                            },
                            "gcp-vision-label-detection": {
                                "count": 7,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.908,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.703,
                                        "label": "Slope"
                                    },
                                    {
                                        "score": 0.701,
                                        "label": "Footwear"
                                    },
                                    {
                                        "score": 0.686,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.67,
                                        "label": "Adaptation"
                                    },
                                    {
                                        "score": 0.616,
                                        "label": "Geological phenomenon"
                                    },
                                    {
                                        "score": 0.53,
                                        "label": "Glacial landform"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 58,
                                "type": "content",
                                "content": "Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 58,
                                "type": "content",
                                "content": "Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.989,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "DPNKKPPMPPPMJGPIIECPDAPGHJGPDPDNKIPPMAPPDCMPPBGPBPEPPGDPPLBPPNNHPMPPOOCOGPNEKPPPGPPPFPBJIPEPINPPOLJPPPODPIKLOPBKPNPAOPHJOIHLLKPDPMHOPFFJPPCPNLLNJBPAIPPIPPPDPKFPPPACFPEPPLNIKOCHIKPMIEFHDDDJPBPHPPMAAPPPMJHDPNPDPKILPDPFKPJCAPPPACMJPPLPPPPBPPKAPPPPPMPPPPEGPIDDCFGJPPOFKPHIPPPPPMCPPICFPILPPPLBKPPALBECPPKMOPPPBPPPPFPFDPEBFPNCCCPPIMACPCGGHHHPHPAPPPBPKIPBBHHLPEMCPPPAPPAPPAPBKCKPDBPEPBPMMPAPPIJNJCNPHPMPIIPPPPIPPAPEBPPDCPPPPPGEFLKPMPNNPADEPPPHIPLIDCKPBPPNPHBDPPFJPJPDPPPCPCBPBBOIHPMPECDNMPOOAPPPCCPHAIPLPPKPJNNHNPPLPLPEPCAHPPPPEPCEPPBPHGPPFCPLPIDFPEPPJKKFMBDCNPAPHNPGHGPIFPJHEPIBPPDPJPJKCPLLMKPEACDPLPPCPOPPBPGPCDIPAPDFNPIHJDOPOEIPCPGHFPPCAMPFHNPPAKPLPDGEBMPFEDFPPKPBAPPAKJGFPJDDNFPDLCMKPODMPPBFPBPPBNPPHKFPPNFPAAHGGFBPCEPFDPLHHNCPPEPFPGKFBKPMDPOPECKCOFDGPPBEPFBPPMPFPPPLMPLLPDPJDJBPDPKFIFKLPOOGEJPLCCDPBFPBHGFPDPPMDCPOPPKEPLPPLHHBPNPHMNKPPCBPPMHLOPEIPAIPAPPPPLPPPECHPPPPMKNPPPAPFDNCCPGPPBBKHCAABPOPPLBPPMECKPDMPFPKBDAADPJPGPPHPLFPPCLBEPLCGBOIGPPLPPPPENPPPGAFGPBCHPEIMNOPLPIJEFHMPELDOLLLEBDLGHCJPPCPCBEPCMPPPGPGPPPPMPCGPDPLCBCADCNPPPPBPPPHPGPLFPPBEPPHPPPDKJPFPMGPEGPEPNEJPNGLHPDPPPLPJLNIPPPNKKPPNGCFPJPPDPBPCPPLALPBNBPPPDPLPPPJJPPPLLPNPCBBKHPPEPBBCPMPPPPOPPPADPHFDPKBIJPPJHAAPGENKHKMDNPAPNPNAPILPPGPPBGENPPPPPPGKJPPJFGPPPOPFPCGHPMPPPJBBFJEHLOPKGCPDIPFPPPPPPHPJBPAFPPPPLBEGACKCPLELJEHPHPPPPLCNPKCEPPPJKPOPPEPPPPPPBPPEPNHPPAPDEPPPBBPPMPPPPDCHAPPBCGLDFPHOMJDHFPPPEEGHPPOPPPBLPDLPEIJLIPPIHIJPDPPIBPHPPPPPDPDJDLPPGPPLLMLHPMPPLPJFIDMDOFHPDPPBOPDPFEPPOPKDPPKPFJPEGKEGAKMNPPKPPPLFOIPPPPPPJPEPPEFPPGGIPPPPAPHPEJCJPCBPPCPEDPLDPPGEFBPFPPECBHBFIJHPPFFPPNJIEFPOPJDPPPPPHDEEPJMGOPPPPAHODPPEJBPPDPKKKKPPBPCEPPDPPPLEBHPPJPPHKPDOPPPPCPBIPEPPLHPGPNLPEPNLBPPOKPKIFCPPANKEPFPHJHAKPPFPFKPPOKPPPHGFGFPEJPPKBPIIPPCPMPMPBBPPPIPPJPOLBPDPDJPKPPJPGEFAMJAOJPPMBBLPLPPPNABPFGDGHPGCPPPPPFPMPKMEJLPPOPHPPGLPKBPFOCNPPPPPBPECIGPPPPEPIHKPFDPPPGPCPPEEPHLOGPNPEDJPHFPPPHPPPLHPEGPPPPPBCAEPAPPPPEIPPPPBEPPPLINJIJCBOPEOPPMPCABFBECIPKPMOPGPPOPPEPPPPLPMOMCPCPEMEGKBEJKJIPAFOPMPPJDMPHPPFCKBKFPMMBMPPPFPOJPADOFFKBKPALPDPPCLHPPPPOLPDPOPONPPKPJEPPIHGPFPPHAFBIPPDBPJDPCPEPPJPLPPFOKEEAPBPPPHFIIPPGDPLPJ"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "o9ky9NhxIySVhHTBzxWYILxvW80g9pCL",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.554735Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.527280Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 188462,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/o9ky9NhxIySVhHTBzxWYILxvW80g9pCL/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 64822,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/o9ky9NhxIySVhHTBzxWYILxvW80g9pCL/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 61492,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/o9ky9NhxIySVhHTBzxWYILxvW80g9pCL/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "extension": "pdf",
                            "filename": "fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.44,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:52.040258",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.765979",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 2.8,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:02:03.285033",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.63,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:50.850131",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.89,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:26.208465",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.49,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:07.535433",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.52,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:21.611942",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.64,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:26.574543",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.31,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.419241",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.22,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.522017",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.46,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:41.006510",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.64,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:46.670730",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.37,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.803220",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 13,
                            "length": 20,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "C8ZqRtOAzQKwXKeJmsXVUnZevSh1gQiP",
                            "content": "Process 0 Lorem ipsum dolor sit 0 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor 1 incididunt labore dolore magna aliqua. 3 Lorem ipsum dolor sit 0 Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor adipiscing elit, sed do eiusmod tempor dolor incididunt labore dolore magna aliqua. 2 incididunt labore dolore magna aliqua. ",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-object-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.535,
                                        "bbox": [
                                            0.0726,
                                            0.3901,
                                            0.9656,
                                            0.3901,
                                            0.9656,
                                            0.8755,
                                            0.0726,
                                            0.8755
                                        ],
                                        "label": "Packaged goods"
                                    }
                                ]
                            },
                            "gcp-vision-label-detection": {
                                "count": 10,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.91,
                                        "label": "Product"
                                    },
                                    {
                                        "score": 0.903,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.787,
                                        "label": "Brochure"
                                    },
                                    {
                                        "score": 0.783,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.722,
                                        "label": "Website"
                                    },
                                    {
                                        "score": 0.674,
                                        "label": "Brand"
                                    },
                                    {
                                        "score": 0.658,
                                        "label": "Graphic design"
                                    },
                                    {
                                        "score": 0.612,
                                        "label": "Auto part"
                                    },
                                    {
                                        "score": 0.594,
                                        "label": "Advertising"
                                    },
                                    {
                                        "score": 0.525,
                                        "label": "Wheel"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 70,
                                "type": "content",
                                "content": "Process Lorem ipsum dolor sit 0 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor incididunt labore dolore magna aliqua. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor dolor incididunt labore dolore magna aliqua. 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor incididunt labore dolore magna aliqua."
                            },
                            "zvi-object-detection": {
                                "count": 2,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.917,
                                        "bbox": [
                                            0.511,
                                            0.66,
                                            0.605,
                                            0.81
                                        ],
                                        "label": "person"
                                    },
                                    {
                                        "score": 0.766,
                                        "bbox": [
                                            0.378,
                                            0.658,
                                            0.501,
                                            0.861
                                        ],
                                        "label": "person"
                                    }
                                ]
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 69,
                                "type": "content",
                                "content": "Process Lorem ipsum dolor sit 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor incididunt labore dolore magna aliqua. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor dolor incididunt labore dolore magna aliqua. 2. adipiscing elit, sed do ejusmod tempor dolor incididunt labore dolore magna aliqua."
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 1.0,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "PLKAPPPLPPLMPEPPCOPPEOPIPPNPCPNPAHPGLBPLGDPNPAHGPOJPJPMPPPEPKHPBPBPPPMCPCPPCIPPPPPPMHPPPGDADFGPPALCPPPPAPGMPKPDPPPPMCLICKPKPCPPBPPEPPPIFEPEPPJPFBKPCPPPAPPPPNPAPDPMPEPIPDBPAPEAPPPEPLEPPPAPPPLPPPPJCPPPEKPCPAPLAPEJIPJPHPOPPAPPKCPFPPPPEFPMNCIFPHMPPPPKPPPAAIPJMIPPPPHPCFPCDPLIGPKPNPPPPPPBPPKPPPPHFBHHFPPPEKDDAHPPMPCKBPJICCIPIBDPPPPCGPHFGMPLPPPFPPPPPBGPJPPOGPNMAPPPBPBCFPBPEGBPPAKMIFPPGOPAPPHHPPLPPELLJFDPLPAMPPAPBEPPPAPPMHIFCBPPPGPPLPEPBNPMPLPBPAFPMPPPPPEAPPMHHPKPPPLLBPAAPBAAPPPPPBGMPAPPEIPPPGPPPAPPPPPPPEPPPPPPPNCPBCDAPPPPPBMNGPPPPHOPPPOPNPPPPPHAPJPPABMBCPPPOIFOJIAPPBPFPJFHPPPBDPPCAAPOGPKMMLFPBEPPPPPPDFJPHPHKPAPPPPOPCPPPPKPDPJPOPKPPLDDPLPHPPGPPDPEPJOBPBBAPPPPPKHPPBFBPPOOBEPOPCFPPAPJAPPMJPNBPPPLOLJPPBFPBPFALBPPIAOCPCPPNPAHIPPMPNPIPPDPPCPPOLCCFEFCEPPPPBBNBPOPLDPIPIPPFPPEMPBPNNEPCPPOAKPABFIAPPPDFPDJPEEEGPPGPPAGNPBPMPKCHOPEMAGPGIPKHPPPEPNFAPOPCMKLMIBIPPPOJPHFDPPLLMDPFPPPLKCAPBDPBLPMABBPEBMPPANPEPPPPICCDIPBOPEFFPJPAOFPJIPPPLPPPCANDBDGJPPPPBPPPPIHPKFBPDDNAJPCCPPPLGPLKPAGBPPPPAPPNIBLHDPEPPPPPPOCLKPFPPCHPFGHPPPPBPPHPPDAKPBPAPCPBNPOPJHCPACPPDMNPPNPPPHNPDPBFCEGPGFPHPPMPOPEPPPOIHOGPPMPKHCPLPLPKMPHPKNEHPPPPPBGPPPDGPMEJPPPFPKDPJHMPPMACDBNOADEMKPDIPPPPPPEFPAPAFPNEADINPODHEPGBLPPELCDIGPLPPBOFMHPKPPOPMPPPPPPPEIPGPDFPPPDEHPMAPPPNHPEGHKPAPHPPLEHKPPHLJEHPIPFPELKPABFPPPPPFFKJABOPPPFEGPEPEPPPPPPPMLPIPBBPDPJCPPCNPPPPPDLPLMPIPEAPJGANPPPPPEPFCHAPPIPEDIBJPIAPPPBEGPFFPHPLOPMEEPPPPPCEBPLLPFBHBPPPPPKPFPPFLFLDCEKOPIPEPLMPLCPDPHPPAHPDPCIBPPOGDLDJFPDMOBEPNFPPDHDPDPFPPPCKAEEPPPDPGAPMOPIPPEBJPPPNJEPEPAIPPPPDHAPMEEPPLPIBPPPEPHDPIHILBBPPJHANHCPCDDPDPPIEPPEGEPNLNPPPPPNPNPJBPPELPPPBDPKIIPDMPCPPGFIBPPIDBFNPFPAHHIBFPPHPPGLJHIPPIKLPALPHPPFJKLGPLPKPPGOCLPPPDHBNPDBJPPMIPEPPAPINHPGHGBKPPPPPBPPKPAPPPPDPPPFPIAPPPPIHPMPNPMPPPIBPCLPFOPPPHJMPPBPPFNOPEICIHPPPEDPBBPPEJPCPPPCHPPJBOPPCPEPKPJPHHJJCJPEFPCEAPNKPNPENPKFPPPJPPPPPPPBNIPPAPPPPCIDHCFPPFDDNDPHAPMPPPEPCMJEPPPCNPGFAPHPPPEPIAMMPPPPPPPJLIPGPEBPOBPPIPPPBIEICFCPPPBPPCPOHPPPCPPOAPJOBCPMFAPJHPAPKMLDPAANPPPDEBPNBPPPKPAFLKPEELPOPAPKEPNEADDPFBKFPLFPPBEPPOPPPPJPPBPAPLPHMGPPPGHDPPIAIGPAEPPPJPMEIJILPPPPFGPILHCHAPLCPICPPCEPLIPPPP"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "oR8mehSkonDjVrWyDyd5cT97sUNF6Zdb",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.453668Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.527534Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 60662,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/oR8mehSkonDjVrWyDyd5cT97sUNF6Zdb/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 24043,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/oR8mehSkonDjVrWyDyd5cT97sUNF6Zdb/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 20375,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/oR8mehSkonDjVrWyDyd5cT97sUNF6Zdb/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "extension": "pdf",
                            "filename": "fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.75,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:51.662723",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.758166",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 2.84,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:02:02.926481",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.66,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:49.584336",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.87,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:24.420287",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.37,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:07.279957",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.31,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:21.345767",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.46,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:26.842801",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.34,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.643453",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.23,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.756710",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.31,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:41.273973",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.6,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:47.231443",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.27,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:55.920305",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 2,
                            "length": 20,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "C8ZqRtOAzQKwXKeJmsXVUnZevSh1gQiP",
                            "content": "Confidential Customized for Lorem Ipsum LLC Version 1.0 TOC Overview Trend analysis Deliverables Problems to solve Target audience Vision Project objective Proposed solution Team Market trends Process",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-label-detection": {
                                "count": 9,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.98,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.977,
                                        "label": "Green"
                                    },
                                    {
                                        "score": 0.913,
                                        "label": "Turquoise"
                                    },
                                    {
                                        "score": 0.912,
                                        "label": "Blue"
                                    },
                                    {
                                        "score": 0.905,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.885,
                                        "label": "Aqua"
                                    },
                                    {
                                        "score": 0.85,
                                        "label": "Teal"
                                    },
                                    {
                                        "score": 0.743,
                                        "label": "Screenshot"
                                    },
                                    {
                                        "score": 0.529,
                                        "label": "Number"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 27,
                                "type": "content",
                                "content": "Confidential Customized for Lorem Ipsum LLC Version 10 TOC Overview Trend analysis Deliverables Problems to solve Target audience Vision Project objective Proposed solution Team Market trends Process"
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 27,
                                "type": "content",
                                "content": "Confidential Customized for Lorem Ipsum LLC Version 10 TOC Overview Trend analysis Deliverables Problems to solve Target audience Vision Project objective Proposed solution Team Market trends Process"
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.998,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "IJPPBPKCBPAJDMPPHKGBPBDCJFPPEPPGGLPPPALPPMCEEAPAPPAPGFJPPPMPJLHBPBPPOPBFCPNAMPPPAAPOLPFPPDAKGOPPADEPDPOGPCIPBHBGOPPCPPBNPOKFPJPPKPGFPBMPFAAPPAHHICKPAGPEPCPIGPAKAFCIPPAPMBANEPDBIFDPPPPCGMPPDCPPPPGAAFPGEHIPHNHHPLAPPBPPNEGKAHAMPFKBPHMPCPKAICKBDDPPDBGPPBPAPAFELPPNPHGKPEGLDCCHPDPBPOALPOBPPPPJEPNCPJPIPNGPMKAFDMPPPJMMJPEPGPPJPIPDNPHNPACHBPJPJOGPPPAPMAPOGJPPPAGPAFBLPBPHPPIIPAPHFBCPPPPAKPMDPIMBPAPFKBDABBJLPGHOIDPPAFPPJIPPAAJCFGHGPPPKHCDGFPPPPPPEAFNPAPPBNPCIAEBIPPPMHPKGNJCPCALPIPIJCCCPAMFPEHOPPCPPABAAMPPPPPAMPPPPEBNACJAPAPPDAJDJGPFOKIPPPBPNPABMHFEPPMFPEHNCPHDCPPBKCHNMPLPPDOIDJPBHPPPFAPEPMMPCPPCCHKPPMPNOAHAPCEECDPPFPBIJCPNEPEAOAPHACPPCENNEHGAPIBPBPBAEAIPPDAPPGACAAPABBEEJPAEPPCPPPAPHPIPNPNBCGDPPPADPIPDPNPBFDAODPNBGDAFABABKPBJPPPPPNDPKAPGABBKNNDPKPHDOEKGIDNCGPPALPPPPIIOCPCANHPPAFJCMPPAPPNAPPBPNBPDPJDPBANMNBPCFABPPCPPAPNPAFAPBPPPOICBELPGPPGDPEKMAPBBPIPPPPMEEAPDAPHAPPNMPPAAPNIIPHPCBPAKAOPMBGPJNPPCPDCLBBCAFHCDOAJOABGAPIBAEPFDPBAPEEABJKDAPPPOAPEIPOPPPBPABAOBPPMPPJOPPKBKDAAIPICGFPPIPKFANMAPADAJLHCBPFPPMAOPJOAMPPPCCPKPGHAAKAKNPNBPKPPPMNAPJIPPAPPFPPFGIIPLBPNBPFDPGPPAKPGPPPPJNPENPBOCMCEPKPIPNHBBCPBPPOLFPPBPBAPPAFDDPJIEPPPPGJAPPIBPJJBKPEAAEPPCAAPKIPPPPPPFDPPHAIBAAPIGJOFAKPGEPAFJPJADBPPPPAEDBIPGPPPPPBPEPCPPPKBPPPBBPPAGFEDJFBPPBPGPPBMAGEMPHPPBCABNAEJPCEEPFLFPPPPPBPNOKPABABPLOPLAAFCNFDPGGPPPADEKKCBDBALLPFCLDAAPKNMJNPMBJPPPPEAAIPPPOKGMEPBIDBGPAJIIPCAJPCAPNPAIPFPBIFAGACPBFPAAPBLAPCJBIAAPPPKPBBPDFAFDAGBKGPBOPJOAFPKGPKNPAANDDPOPHPPPPOCPJPDEPPDPFLPPKHEMBFIEPPAEPNBIPBBFOPPPNPLMPPGPAPPGBPPBCACPCHACBAGLCEDAGPPFJKPEBGPMGNMKPAPPCPAEHAPDKCEABPCPADDPPPNBGPPILPPAPHPPPPELMHPHBDAPNPMJPIBEPPANPPMHPDJPPOKBOCKMDHCPPPAPPPPJCDAGACPKPPACCIBAAMAPPAMACJPPPFHBPGPIJICDPLDPAACPCBEPPAOMPOAMMGPFCBAEPBAPPANPPNMACPPAPKPCCMGPHJHBPIAPKLJPAPPPABJPABPPJDADPPDOPPEAANBJGACMDPHHPNPPJPPPEDIDPBJAAPFIOPPGLJJPFPPPPPPPFEPPFKPFDCLMPPIGKMINPAJPAPPJIPPNGPAAKPPBPBMDPDEKPPPDJPBPPAABNEDPBCPPBAFPHFPPPGNFKAAPIEKGPMCOHBEPPDIAGPFOPPIPAEODDPINJBPPPPBKPPNDPILIFBAPAADPGAOOABPCEAPFGPPDKIPPPMPDOPNPIPPJACOPFPPBCJDGAPIPJBJHOPPPAPMPKPAAPPOPPPNPPHOPBPAPGDCDJPACFHABKPMPDPCCPPIPJBEAPACPJCFKOCPPBPOPB"
                            }
                        }
                    }
                },
                {
                    "_index": "ux6xequyjzzfncvk",
                    "_type": "_doc",
                    "_id": "KNeb_mL5KWyVzcNp6eVj7HESmJBF67JN",
                    "_score": 0.0,
                    "_source": {
                        "system": {
                            "jobId": "7c745071-8f44-16fb-93c6-5a8bb7caaf59",
                            "dataSourceId": "7c745070-8f44-16fb-93c6-5a8bb7caaf59",
                            "timeCreated": "2020-06-30T20:00:56.634595Z",
                            "state": "Analyzed",
                            "projectId": "7c482c46-8caa-4ef0-acb2-513ec7bda903",
                            "timeModified": "2020-06-30T20:05:00.527756Z",
                            "taskId": "7c745073-8f44-16fb-93c6-5a8bb7caaf59"
                        },
                        "files": [
                            {
                                "size": 171389,
                                "name": "image_1000x562.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/KNeb_mL5KWyVzcNp6eVj7HESmJBF67JN/proxy/image_1000x562.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            },
                            {
                                "size": 56931,
                                "name": "image_512x287.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/KNeb_mL5KWyVzcNp6eVj7HESmJBF67JN/proxy/image_512x287.jpg",
                                "category": "proxy",
                                "attrs": {
                                    "width": 512,
                                    "height": 287
                                }
                            },
                            {
                                "size": 53810,
                                "name": "web-proxy.jpg",
                                "mimetype": "image/jpeg",
                                "id": "assets/KNeb_mL5KWyVzcNp6eVj7HESmJBF67JN/web-proxy/web-proxy.jpg",
                                "category": "web-proxy",
                                "attrs": {
                                    "width": 1000,
                                    "height": 562
                                }
                            }
                        ],
                        "source": {
                            "path": "gs://irm-poc-test-data/office/fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "extension": "pdf",
                            "filename": "fa38b14d-1a36-4813-955f-d2145bb52841.pdf",
                            "mimetype": "application/pdf"
                        },
                        "metrics": {
                            "pipeline": [
                                {
                                    "executionTime": 0.43,
                                    "module": "standard",
                                    "checksum": 2178814325,
                                    "executionDate": "2020-06-30T20:01:52.350427",
                                    "processor": "zmlp_core.core.PreCacheSourceFileProcessor"
                                },
                                {
                                    "executionTime": 0.03,
                                    "module": "standard",
                                    "checksum": 3558348737,
                                    "executionDate": "2020-06-30T20:01:53.791873",
                                    "processor": "zmlp_core.core.FileImportProcessor"
                                },
                                {
                                    "executionTime": 3.17,
                                    "module": "standard",
                                    "checksum": 457707303,
                                    "executionDate": "2020-06-30T20:02:06.456575",
                                    "processor": "zmlp_core.proxy.ImageProxyProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "standard",
                                    "checksum": 482873147,
                                    "processor": "zmlp_core.proxy.VideoProxyProcessor"
                                },
                                {
                                    "executionTime": 0.64,
                                    "module": "standard",
                                    "checksum": 1879445844,
                                    "executionDate": "2020-06-30T20:02:52.756650",
                                    "processor": "zmlp_analysis.zvi.ZviSimilarityProcessor"
                                },
                                {
                                    "executionTime": 0.9,
                                    "module": "zvi-object-detection",
                                    "checksum": 3329037091,
                                    "executionDate": "2020-06-30T20:03:28.850564",
                                    "processor": "zmlp_analysis.zvi.ZviObjectDetectionProcessor"
                                },
                                {
                                    "executionTime": 1.47,
                                    "module": "zvi-face-detection",
                                    "checksum": 2666795579,
                                    "executionDate": "2020-06-30T20:04:09.003225",
                                    "processor": "zmlp_analysis.zvi.ZviFaceDetectionProcessor"
                                },
                                {
                                    "executionTime": 0.35,
                                    "module": "zvi-label-detection",
                                    "checksum": 2989691564,
                                    "executionDate": "2020-06-30T20:04:21.699866",
                                    "processor": "zmlp_analysis.zvi.ZviLabelDetectionProcessor"
                                },
                                {
                                    "executionTime": 0,
                                    "module": "zvi-text-detection",
                                    "checksum": 4290842193,
                                    "processor": "zmlp_analysis.zvi.ZviOcrProcessor"
                                },
                                {
                                    "executionTime": 0.5,
                                    "module": "gcp-label-detection",
                                    "checksum": 2975666803,
                                    "executionDate": "2020-06-30T20:04:27.075720",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLabels"
                                },
                                {
                                    "executionTime": 0.29,
                                    "module": "gcp-object-detection",
                                    "checksum": 3294827242,
                                    "executionDate": "2020-06-30T20:04:33.706377",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectObjects"
                                },
                                {
                                    "executionTime": 0.29,
                                    "module": "gcp-logo-detection",
                                    "checksum": 2678460964,
                                    "executionDate": "2020-06-30T20:04:37.826309",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLogos"
                                },
                                {
                                    "executionTime": 0.35,
                                    "module": "gcp-landmark-detection",
                                    "checksum": 3943437245,
                                    "executionDate": "2020-06-30T20:04:41.369006",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectLandmarks"
                                },
                                {
                                    "executionTime": 0.66,
                                    "module": "gcp-image-text-detection",
                                    "checksum": 3933606824,
                                    "executionDate": "2020-06-30T20:04:47.306897",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectImageText"
                                },
                                {
                                    "executionTime": 0.34,
                                    "module": "gcp-document-text-detection",
                                    "checksum": 681907460,
                                    "executionDate": "2020-06-30T20:04:56.004443",
                                    "processor": "zmlp_analysis.google.CloudVisionDetectDocumentText"
                                }
                            ]
                        },
                        "media": {
                            "orientation": "landscape",
                            "pageNumber": 18,
                            "length": 20,
                            "width": 720.0,
                            "type": "document",
                            "pageStack": "C8ZqRtOAzQKwXKeJmsXVUnZevSh1gQiP",
                            "content": "CFO Vinny Viewer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Skill A 90% Skill B 85% Skill C 83% Skill D 65%",
                            "height": 405.0
                        },
                        "analysis": {
                            "gcp-vision-object-detection": {
                                "count": 3,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.917,
                                        "bbox": [
                                            0.6462,
                                            0.2293,
                                            0.8201,
                                            0.2293,
                                            0.8201,
                                            0.3677,
                                            0.6462,
                                            0.3677
                                        ],
                                        "label": "Hat"
                                    },
                                    {
                                        "score": 0.903,
                                        "bbox": [
                                            0.5672,
                                            0.2247,
                                            0.9867,
                                            0.2247,
                                            0.9867,
                                            0.8772,
                                            0.5672,
                                            0.8772
                                        ],
                                        "label": "Person"
                                    },
                                    {
                                        "score": 0.586,
                                        "bbox": [
                                            0.5762,
                                            0.465,
                                            0.9881,
                                            0.465,
                                            0.9881,
                                            0.8715,
                                            0.5762,
                                            0.8715
                                        ],
                                        "label": "Clothing"
                                    }
                                ]
                            },
                            "gcp-vision-label-detection": {
                                "count": 3,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.912,
                                        "label": "Text"
                                    },
                                    {
                                        "score": 0.75,
                                        "label": "Font"
                                    },
                                    {
                                        "score": 0.639,
                                        "label": "Brand"
                                    }
                                ]
                            },
                            "gcp-vision-doc-text-detection": {
                                "words": 39,
                                "type": "content",
                                "content": "CFO Vinny Viewer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Skill A 90% Skill B 85% Skill 83% Skill D 65%"
                            },
                            "zvi-object-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.997,
                                        "bbox": [
                                            0.571,
                                            0.224,
                                            0.995,
                                            0.895
                                        ],
                                        "label": "person"
                                    }
                                ]
                            },
                            "gcp-vision-image-text-detection": {
                                "words": 40,
                                "type": "content",
                                "content": "CFO Vinny Viewer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Skill A 90% Skill B 85% Skill C 83% Skill D 65%"
                            },
                            "zvi-label-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.994,
                                        "label": "web_site"
                                    }
                                ]
                            },
                            "zvi-face-detection": {
                                "count": 1,
                                "type": "labels",
                                "predictions": [
                                    {
                                        "score": 0.994,
                                        "bbox": [
                                            0.661,
                                            0.269,
                                            0.792,
                                            0.559
                                        ],
                                        "label": "face0",
                                        "simhash": "SNMRLNLQKJKILNNLLLNNMNLKOORMQKNMHNLMKPLJNOOKLIKMJLNMPMJNMMPMPIPPLNNKOKHLMMMKKIOLQNINMRNKMOLLLKLMNKKIMLMMNLLKLLNMNLOKKKILKQLLJHQKNSLOOLMMOLPRQMPMKMOOLLOOKJMNMMLOPMSJKOGLMNOMQNQMILNQKOJGMONNPOLOMJOQJKOINLMNOMNPLMJMONMPMMINLLKROPNLNIOMOHILLNPKLJIKMPMJKNJOMNNMINKLOMNKOMMLMMNPOLMRMKOQKNLLJOLPORNKNPNNGMLJLLNKLLNNMNKMLOMLNLMOMLMMMMJMIMNMKKNMOLPKNLOMIJMLJNIMPIJMMMKMPLOMMNMKPKMNNOLNJPNMJOMLPJOQNKPKJOHMKSJJJMKNLPILONPPKJNKIKMKMMOLLLLKRLKJOJMNKJOPLPJNKOKOPJMILKOLOLNMPQRSILQKMOLKMLMNNNJKKNOMLKMQKMMINMKNOKPLRMILJLQJLLNN"
                                    }
                                ]
                            },
                            "zvi-image-similarity": {
                                "type": "similarity",
                                "simhash": "PPNPDPPDMPPLEPPPPGBPEBPGDPLPPPMPEEPPGJPPPDPPPPEPPPDPJGPPPPCPFOEJPBPPPPFPGBKPCPPPPPPPKPPPOIACIMPPDDPPPPMEPPCLPBJJPNHPJPBHOPBBGNPCPPNPPPIOBPCPPEHPKOPBIJIPFPPJPMDMBAPDBPPMFIOPJOKPPPDPPLMGPGFFNPPPPPECPPPPJPLFPPFAPPCPPPPBPBCLBPOMEOOPPPNPFPPCOOGEPPPPPPJPPMCAPPHBDFGEKIMCPFIPPPJLPDPMPPEHPPEPPPIIEPPFICEFIPPPOHMBCPPPPJHGMEDKAPHBFDPPLPDBPLCLPPPPDPPPPPDPCMPGPNBPPPPPGCPCPKMCHCPPPAPLCPNJIMPPPPPPPKLCCPPJLPHPIDPBPAHLPENIPPPCHPOHDPBHPPPPCMPPPAMCINIFPPNEEOCPAPPKNPPMLLPPPPPJPIPBFCDJDHFJNPPPFDJPPPFKIPPPCPPPDEBEPPLPPNPPPPNPPDPBEPAPJPNPDIPFNMFEHPKPNBPPPCFPPGLPBLPDCMBPJPCJPGPJEHPEPPJPLLEBPNCCDPHDFPPJLOPDPCPDPJNPPPDMFOKLPCAKAPDJPFEEFPGPJPAPPPPGHKPKBGNPLGPPDNPDPJIPCLPLFAPPJIPIPPMAPJPPPDABPPPIKPPPPDBPLHKPPCPPGFPPBPAIFICGPAJDKEGBKPPIPIGJEHBPPPPPPGNPJPNNOCOPFHGCLGPPPPOPCHEPPPJPNJPEGPPHPEDPOJCCPPAOIPPBPBBPPAPGIPJKGPPDONGPCPMCCDPPPPJCGCPAPAJDPKPPEDECKPFPOKDPJIAPPGIPJPPJCGLPJPFPPGHPPPPPPIPMCBHEAPICPOBLPGABAPPALHJPJPJLANCDFIFFDFFPIPEMKNCDPKJPPPJLGKNEDBGLGPPDPPPPEPPPJJNGLPAPPCJPHPJPPIPFABNPKPPBPNPBDDPFPBAPPILPPGIPCHPPCLPAPPNPPLAPPIPGGAKPPICPHPKAPPPJPAPEBPPGPPPPPPPPDMPMPPFNCOPMPPPHPPGPPDPNPAIPLIKPLPPFPPPPNAHPKHPAGBHPPPPFDHPPPCDPPDLGPPKPHDPEPPOOPNAEINBNIPFPFAPPPPPPPPPENPHJPBCFPPPPHBEAPOGPHHNPABHGOPPPGPLDPPCPPKPPBPPPJPCEMPFPELNPPGKAPLAPPOPJPBBEHOFPOPKPKFJNLPPLFPPKPDKFPPPPIPPPPOFPLBIAONPFPJDMJEGKPPEMPPMIKPMGAGPFPPCPPIPMPNJPEKPPIJKPODPNCAPPPPPGLLCEPAPPPPNDPCJGKAGDPBELPBCNOPHPPDPOFPAFJFFNFKBPPPHECPPPMEPNPPIPKBPCEMPJMPEPDFPHBPIOLPPENHAPIPLPMJHPKBKDPPLPBPPPDPPJPPNBPPPPHJPBPPIPPMPFPPPPPPBPKPKBPPPJDPAPKNPBPPGPIHEHFPPLPPNGMEHEPEPIEFEPMPPFGGPIFPAOIPCIPPDPPPLPPPAPPPPHPPPJPDDPPDPPPPAOIPPPPFGNGNOPGDMPPJJGPPPGPCNCEFLOPEPPPPOHPPPPLFPGFPLPPKBGDPLPPEPPCMIPGPMPKALPHPPEPGPPBOPDGCPPPALFKIJPNPCPPPHPGGPPPDPAPPPHLPBHGGPEPPJPPCPPKFPEPIFNPPPPPIKPCPPDOJPBHCAPPKPPNPBJPPDPPHNIPHIKPPCFPPPPIKPEEPPFPFFPMKKPPFGPOPPPPOPFJPOEPIPONNPHPCEGPILPPPPBKILFFPPIIAGNPPAPDKKMNPLJNJPIPIFPBCAPMCPPCPNGPNPPBPPPNPPPMEJPCPDCPEPFPGEPHCNIGPPPPHPCMLMPPFDIHNPPPFFNPPPPHPEPGDPPGLPBDFPPPGLEOPKHNHNPKGPFFMPJPPPFPNKPMPCACPIJPAPINPPHEPPOPPPPPOPDPDPLPONFPNPLMIJADAKPPPHPPBGIPICGPPOPPKBPPBDPFKBMHBPKFPPGPPCPPILD"
                            }
                        }
                    }
                }
            ]
        }
    }
}