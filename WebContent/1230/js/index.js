function doQuery(){
	       var num = 0;
	       var numArr = [];
           //var datas = data.reverse();
           for (var i = 0; i < data.length; i++) {
           	       var currObj = data[i];
           	       var hugoSymbol = currObj.hugoSymbol;
                   
                   var url = 'http://oncokb.org/legacy-api/mutationMapperData?hugoSymbol='+ hugoSymbol;
           	       $.ajax({
           	       			        url :url ,
           	       			        type : 'get',
           	       			        async : false,
           	       			        dataType : "json",
           	       			        contentType :"application/json",
           	       			        //data:dataStr,
           	       			        success : function(res) {
           	       			            console.log(res);
           	       			            if(res.length >0){
           	       			            	num ++;
           	       			                numArr.push(hugoSymbol);
           	       			            }
           	       			            console.log(num);
           	       			            console.log(numArr.toString());
           	       			        },
           	                        complete: function(XMLHttpRequest, textStatus){
           	       		            },
           	       		            error: function(){
           	       		            }
           	       			});
           }
}




var data = [
    {
        "entrezGeneId": 865,
        "hugoSymbol": "CBFB",
        "name": "core-binding factor, beta subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000412916",
        "curatedRefSeq": "NM_022845.2",
        "geneAliases": [
            "PEBP2B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 92002,
        "hugoSymbol": "FAM58A",
        "name": "family with sequence similarity 58 member A",
        "oncogene": false,
        "curatedIsoform": "ENST00000406277",
        "curatedRefSeq": "NM_152274.4",
        "geneAliases": [
            "STAR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7010,
        "hugoSymbol": "TEK",
        "name": "TEK receptor tyrosine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000380036",
        "curatedRefSeq": "NM_000459.3",
        "geneAliases": [
            "TIE-2",
            "CD202B",
            "TIE2",
            "VMCM",
            "VMCM1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 867,
        "hugoSymbol": "CBL",
        "name": "Cbl proto-oncogene",
        "oncogene": false,
        "curatedIsoform": "ENST00000264033",
        "curatedRefSeq": "NM_005188.3",
        "geneAliases": [
            "NSLL",
            "RNF55",
            "C-CBL",
            "FRA11B",
            "CBL2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8036,
        "hugoSymbol": "SHOC2",
        "name": "SHOC2, leucine rich repeat scaffold protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000369452",
        "curatedRefSeq": "NM_007373.3",
        "geneAliases": [
            "SIAA0862",
            "SOC2",
            "SUR8"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7015,
        "hugoSymbol": "TERT",
        "name": "telomerase reverse transcriptase",
        "oncogene": true,
        "curatedIsoform": "ENST00000310581",
        "curatedRefSeq": "NM_198253.2",
        "geneAliases": [
            "TP2",
            "TRT",
            "CMM9",
            "PFBMFT1",
            "TCS1",
            "DKCA2",
            "EST2",
            "hEST2",
            "hTRT",
            "DKCB4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 23405,
        "hugoSymbol": "DICER1",
        "name": "dicer 1, ribonuclease III",
        "oncogene": false,
        "curatedIsoform": "ENST00000343455",
        "curatedRefSeq": "NM_030621.3",
        "geneAliases": [
            "DCR1",
            "RMSE2",
            "K12H4.8-LIKE",
            "Dicer",
            "Dicer1e",
            "HERNA",
            "MNG1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 79728,
        "hugoSymbol": "PALB2",
        "name": "partner and localizer of BRCA2",
        "oncogene": false,
        "curatedIsoform": "ENST00000261584",
        "curatedRefSeq": "NM_024675.3",
        "geneAliases": [
            "FANCN",
            "PNCA3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 11122,
        "hugoSymbol": "PTPRT",
        "name": "protein tyrosine phosphatase, receptor type T",
        "oncogene": false,
        "curatedIsoform": "ENST00000373198",
        "curatedRefSeq": "NM_133170.3",
        "geneAliases": [
            "RPTPrho"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2932,
        "hugoSymbol": "GSK3B",
        "name": "glycogen synthase kinase 3 beta",
        "oncogene": false,
        "curatedIsoform": "ENST00000316626",
        "curatedRefSeq": "NM_002093.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 6009,
        "hugoSymbol": "RHEB",
        "name": "Ras homolog enriched in brain",
        "oncogene": true,
        "curatedIsoform": "ENST00000262187",
        "curatedRefSeq": "NM_005614.3",
        "geneAliases": [
            "RHEB2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 55164,
        "hugoSymbol": "SHQ1",
        "name": "SHQ1, H/ACA ribonucleoprotein assembly factor",
        "oncogene": false,
        "curatedIsoform": "ENST00000325599",
        "curatedRefSeq": "NM_018130.2",
        "geneAliases": [
            "Shq1p",
            "GRIM-1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 894,
        "hugoSymbol": "CCND2",
        "name": "cyclin D2",
        "oncogene": true,
        "curatedIsoform": "ENST00000261254",
        "curatedRefSeq": "NM_001759.3",
        "geneAliases": [
            "MPPH3",
            "KIAK0002"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10111,
        "hugoSymbol": "RAD50",
        "name": "RAD50 double strand break repair protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000265335",
        "curatedRefSeq": "NM_005732.3",
        "geneAliases": [
            "hRad50",
            "RAD502",
            "NBSLD"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 896,
        "hugoSymbol": "CCND3",
        "name": "cyclin D3",
        "oncogene": true,
        "curatedIsoform": "ENST00000372991",
        "curatedRefSeq": "NM_001760.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 6016,
        "hugoSymbol": "RIT1",
        "name": "Ras like without CAAX 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000368323",
        "curatedRefSeq": "NM_006912.5",
        "geneAliases": [
            "RIBB",
            "NS8",
            "RIT",
            "ROC1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 898,
        "hugoSymbol": "CCNE1",
        "name": "cyclin E1",
        "oncogene": true,
        "curatedIsoform": "ENST00000262643",
        "curatedRefSeq": "NM_001238.2",
        "geneAliases": [
            "pCCNE1",
            "CCNE"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 23429,
        "hugoSymbol": "RYBP",
        "name": "RING1 and YY1 binding protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000477973",
        "curatedRefSeq": "NM_012234.5",
        "geneAliases": [
            "APAP-1",
            "DEDAF",
            "YEAF1",
            "AAP1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 7046,
        "hugoSymbol": "TGFBR1",
        "name": "transforming growth factor beta receptor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000374994",
        "curatedRefSeq": "NM_004612.2",
        "geneAliases": [
            "TGFR-1",
            "LDS1A",
            "LDS2A",
            "LDS1",
            "ALK5",
            "ACVRLK4",
            "ESS1",
            "MSSE",
            "SKR4",
            "tbetaR-I",
            "AAT5",
            "ALK-5"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 7048,
        "hugoSymbol": "TGFBR2",
        "name": "transforming growth factor beta receptor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000359013",
        "curatedRefSeq": "NM_001024847.2",
        "geneAliases": [
            "AAT3",
            "LDS1B",
            "LDS2",
            "LDS2B",
            "TGFR-2",
            "RIIC",
            "MFS2",
            "TAAD2",
            "FAA3",
            "TGFbeta-RII"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2956,
        "hugoSymbol": "MSH6",
        "name": "mutS homolog 6",
        "oncogene": false,
        "curatedIsoform": "ENST00000234420",
        "curatedRefSeq": "NM_000179.2",
        "geneAliases": [
            "GTMBP",
            "HNPCC5",
            "p160",
            "GTBP",
            "HSAP"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8085,
        "hugoSymbol": "KMT2D",
        "name": "lysine methyltransferase 2D",
        "oncogene": false,
        "curatedIsoform": "ENST00000301067",
        "curatedRefSeq": "NM_003482.3",
        "geneAliases": [
            "KMS",
            "AAD10",
            "KABUK1",
            "MLL2",
            "TNRC21",
            "ALR",
            "CAGL114"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 54165,
        "hugoSymbol": "DCUN1D1",
        "name": "defective in cullin neddylation 1 domain containing 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000292782",
        "curatedRefSeq": "NM_020640.2",
        "geneAliases": [
            "DCUN1L1",
            "SCCRO",
            "Tes3",
            "DCNL1",
            "RP42",
            "SCRO"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9113,
        "hugoSymbol": "LATS1",
        "name": "large tumor suppressor kinase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000253339",
        "curatedRefSeq": "NM_004690.3",
        "geneAliases": [
            "wts",
            "WARTS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 55193,
        "hugoSymbol": "PBRM1",
        "name": "polybromo 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000394830",
        "curatedRefSeq": "NM_018313.4",
        "geneAliases": [
            "BAF180",
            "PB1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 23451,
        "hugoSymbol": "SF3B1",
        "name": "splicing factor 3b subunit 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000335508",
        "curatedRefSeq": "NM_012433.2",
        "geneAliases": [
            "PRP10",
            "SAP155",
            "Hsh155",
            "PRPF10",
            "SF3b155",
            "MDS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 26524,
        "hugoSymbol": "LATS2",
        "name": "large tumor suppressor kinase 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000382592",
        "curatedRefSeq": "NM_014572.2",
        "geneAliases": [
            "KPM"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1956,
        "hugoSymbol": "EGFR",
        "name": "epidermal growth factor receptor",
        "oncogene": true,
        "curatedIsoform": "ENST00000275493",
        "curatedRefSeq": "NM_005228.3",
        "geneAliases": [
            "PIG61",
            "ERBB1",
            "mENA",
            "ERBB",
            "HER1",
            "NISBD2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4004,
        "hugoSymbol": "LMO1",
        "name": "LIM domain only 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000335790",
        "curatedRefSeq": "NM_002315.2",
        "geneAliases": [
            "RBTN1",
            "RHOM1",
            "TTG1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7080,
        "hugoSymbol": "NKX2-1",
        "name": "NK2 homeobox 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000354822",
        "curatedRefSeq": "NM_001079668.2",
        "geneAliases": [
            "NKX2A",
            "BCH",
            "NK-2",
            "TEBP",
            "TITF1",
            "NKX2.1",
            "BHC",
            "NMTC1",
            "TTF-1",
            "TTF1",
            "T/EBP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1964,
        "hugoSymbol": "EIF1AX",
        "name": "eukaryotic translation initiation factor 1A, X-linked",
        "oncogene": false,
        "curatedIsoform": "ENST00000379607",
        "curatedRefSeq": "NM_001412.3",
        "geneAliases": [
            "EIF1AP1",
            "eIF-4C",
            "eIF-1A",
            "EIF1A",
            "EIF4C"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 196528,
        "hugoSymbol": "ARID2",
        "name": "AT-rich interaction domain 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000334344",
        "curatedRefSeq": "NM_152641.2",
        "geneAliases": [
            "p200",
            "BAF200"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 23476,
        "hugoSymbol": "BRD4",
        "name": "bromodomain containing 4",
        "oncogene": true,
        "curatedIsoform": "ENST00000263377",
        "curatedRefSeq": "NM_058243.2",
        "geneAliases": [
            "HUNKI",
            "MCAP",
            "CAP",
            "HUNK1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1974,
        "hugoSymbol": "EIF4A2",
        "name": "eukaryotic translation initiation factor 4A2",
        "oncogene": false,
        "curatedIsoform": "ENST00000323963",
        "curatedRefSeq": "NM_001967.3",
        "geneAliases": [
            "EIF4A",
            "eIF4A-II",
            "DDX2B",
            "EIF4F",
            "eIF-4A-II",
            "BM-010"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1977,
        "hugoSymbol": "EIF4E",
        "name": "eukaryotic translation initiation factor 4E",
        "oncogene": false,
        "curatedIsoform": "ENST00000280892",
        "curatedRefSeq": "NM_001130678.1",
        "geneAliases": [
            "CBP",
            "eIF-4E",
            "EIF4EL1",
            "EIF4F",
            "AUTS19",
            "EIF4E1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3006,
        "hugoSymbol": "HIST1H1C",
        "name": "histone cluster 1, H1c",
        "oncogene": false,
        "curatedIsoform": "ENST00000343677",
        "curatedRefSeq": "NM_005319.3",
        "geneAliases": [
            "H1s-1",
            "H1F2",
            "H1C",
            "H1.2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 54206,
        "hugoSymbol": "ERRFI1",
        "name": "ERBB receptor feedback inhibitor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000377482",
        "curatedRefSeq": "NM_018948.3",
        "geneAliases": [
            "RALT",
            "MIG-6",
            "GENE-33",
            "MIG6"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 11200,
        "hugoSymbol": "CHEK2",
        "name": "checkpoint kinase 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000328354",
        "curatedRefSeq": "NM_007194.3",
        "geneAliases": [
            "CDS1",
            "HuCds1",
            "RAD53",
            "CHK2",
            "PP1425",
            "LFS2",
            "hCds1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5058,
        "hugoSymbol": "PAK1",
        "name": "p21 (RAC1) activated kinase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000356341",
        "curatedRefSeq": "NM_002576.4",
        "geneAliases": [
            "PAKalpha"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3017,
        "hugoSymbol": "HIST1H2BD",
        "name": "histone cluster 1, H2bd",
        "oncogene": false,
        "curatedIsoform": "ENST00000289316",
        "curatedRefSeq": "NM_021063.3",
        "geneAliases": [
            "HIRIP2",
            "H2B/b",
            "H2BFB",
            "dJ221C16.6",
            "H2B.1B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7113,
        "hugoSymbol": "TMPRSS2",
        "name": "transmembrane protease, serine 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000398585",
        "curatedRefSeq": "NM_001135099.1",
        "geneAliases": [
            "PP9284",
            "PRSS10"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3020,
        "hugoSymbol": "H3F3A",
        "name": "H3 histone, family 3A",
        "oncogene": false,
        "curatedIsoform": "ENST00000366813",
        "curatedRefSeq": "NM_002107.4",
        "geneAliases": [
            "H3F3",
            "H3.3A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 973,
        "hugoSymbol": "CD79A",
        "name": "CD79a molecule",
        "oncogene": false,
        "curatedIsoform": "ENST00000221972",
        "curatedRefSeq": "NM_001783.3",
        "geneAliases": [
            "IGA",
            "MB-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3021,
        "hugoSymbol": "H3F3B",
        "name": "H3 histone, family 3B (H3.3B)",
        "oncogene": false,
        "curatedIsoform": "ENST00000254810",
        "curatedRefSeq": "NM_005324.3",
        "geneAliases": [
            "H3.3B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 974,
        "hugoSymbol": "CD79B",
        "name": "CD79b molecule",
        "oncogene": false,
        "curatedIsoform": "ENST00000392795",
        "curatedRefSeq": "NM_001039933.1",
        "geneAliases": [
            "AGM6",
            "IGB",
            "B29"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1999,
        "hugoSymbol": "ELF3",
        "name": "E74 like ETS transcription factor 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000359651",
        "curatedRefSeq": "NM_004433.4",
        "geneAliases": [
            "ERT",
            "ESE-1",
            "EPR-1",
            "ESX"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5071,
        "hugoSymbol": "PARK2",
        "name": "parkin RBR E3 ubiquitin protein ligase",
        "oncogene": false,
        "curatedIsoform": "ENST00000366898",
        "curatedRefSeq": "NM_004562.2",
        "geneAliases": [
            "PRKN",
            "PDJ",
            "LPRS2",
            "AR-JP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 161742,
        "hugoSymbol": "SPRED1",
        "name": "sprouty related EVH1 domain containing 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000299084",
        "curatedRefSeq": "NM_152594.2",
        "geneAliases": [
            "spred-1",
            "NFLS",
            "hSpred1",
            "PPP1R147"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6098,
        "hugoSymbol": "ROS1",
        "name": "ROS proto-oncogene 1, receptor tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000368508",
        "curatedRefSeq": "NM_002944.2",
        "geneAliases": [
            "MCF3",
            "ROS",
            "c-ros-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 55252,
        "hugoSymbol": "ASXL2",
        "name": "additional sex combs like 2, transcriptional regulator",
        "oncogene": false,
        "curatedIsoform": "ENST00000435504",
        "curatedRefSeq": "NM_018263.4",
        "geneAliases": [
            "ASXH2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5079,
        "hugoSymbol": "PAX5",
        "name": "paired box 5",
        "oncogene": false,
        "curatedIsoform": "ENST00000358127",
        "curatedRefSeq": "NM_016734.2",
        "geneAliases": [
            "ALL3",
            "BSAP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9175,
        "hugoSymbol": "MAP3K13",
        "name": "mitogen-activated protein kinase kinase kinase 13",
        "oncogene": false,
        "curatedIsoform": "ENST00000265026",
        "curatedRefSeq": "NM_004721.4",
        "geneAliases": [
            "LZK",
            "MLK",
            "MEKK13"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7128,
        "hugoSymbol": "TNFAIP3",
        "name": "TNF alpha induced protein 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000237289",
        "curatedRefSeq": "NM_006290.3",
        "geneAliases": [
            "TNFA1P2",
            "AISBL",
            "OTUD7C",
            "A20"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 23512,
        "hugoSymbol": "SUZ12",
        "name": "SUZ12 polycomb repressive complex 2 subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000322652",
        "curatedRefSeq": "NM_015355.2",
        "geneAliases": [
            "CHET9",
            "JJAZ1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 26585,
        "hugoSymbol": "GREM1",
        "name": "gremlin 1, DAN family BMP antagonist",
        "oncogene": false,
        "curatedIsoform": "ENST00000300177",
        "curatedRefSeq": "NM_013372.6",
        "geneAliases": [
            "PIG2",
            "CRCS4",
            "DAND2",
            "GREMLIN",
            "HMPS",
            "CKTSF1B1",
            "IHG-2",
            "DUP15q",
            "C15DUPq",
            "HMPS1",
            "CRAC1",
            "MPSH",
            "DRM"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 51162,
        "hugoSymbol": "EGFL7",
        "name": "EGF like domain multiple 7",
        "oncogene": false,
        "curatedIsoform": "ENST00000308874",
        "curatedRefSeq": "NM_201446.2",
        "geneAliases": [
            "VE-STATIN",
            "ZNEU1",
            "NEU1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 83931,
        "hugoSymbol": "STK40",
        "name": "serine/threonine kinase 40",
        "oncogene": false,
        "curatedIsoform": "ENST00000373129",
        "curatedRefSeq": "NM_032017.1",
        "geneAliases": [
            "SHIK",
            "SgK495"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4067,
        "hugoSymbol": "LYN",
        "name": "LYN proto-oncogene, Src family tyrosine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000519728",
        "curatedRefSeq": "NM_002350.3",
        "geneAliases": [
            "p53Lyn",
            "p56Lyn",
            "JTK8"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4068,
        "hugoSymbol": "SH2D1A",
        "name": "SH2 domain containing 1A",
        "oncogene": false,
        "curatedIsoform": "ENST00000371139",
        "curatedRefSeq": "NM_002351.4",
        "geneAliases": [
            "XLPD",
            "LYP",
            "XLPD1",
            "SAP",
            "DSHP",
            "IMD5",
            "SAP/SH2D1A",
            "MTCP1",
            "EBVS",
            "XLP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 998,
        "hugoSymbol": "CDC42",
        "name": "cell division cycle 42",
        "oncogene": false,
        "curatedIsoform": "ENST00000344548",
        "curatedRefSeq": "NM_001791.3",
        "geneAliases": [
            "G25K",
            "CDC42Hs",
            "TKS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 999,
        "hugoSymbol": "CDH1",
        "name": "cadherin 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000261769",
        "curatedRefSeq": "NM_004360.3",
        "geneAliases": [
            "LCAM",
            "CDHE",
            "ECAD",
            "CD324",
            "Arc-1",
            "UVO"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4072,
        "hugoSymbol": "EPCAM",
        "name": "epithelial cell adhesion molecule",
        "oncogene": false,
        "curatedIsoform": "ENST00000263735",
        "curatedRefSeq": "NM_002354.2",
        "geneAliases": [
            "HNPCC8",
            "EGP314",
            "M4S1",
            "MK-1",
            "EGP40",
            "KS1/4",
            "TACSTD1",
            "MIC18",
            "ESA",
            "TROP1",
            "KSA",
            "EGP-2",
            "DIAR5"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7150,
        "hugoSymbol": "TOP1",
        "name": "topoisomerase (DNA) I",
        "oncogene": false,
        "curatedIsoform": "ENST00000361337",
        "curatedRefSeq": "NM_003286.2",
        "geneAliases": [
            "TOPI"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2033,
        "hugoSymbol": "EP300",
        "name": "E1A binding protein p300",
        "oncogene": false,
        "curatedIsoform": "ENST00000263253",
        "curatedRefSeq": "NM_001429.3",
        "geneAliases": [
            "p300",
            "KAT3B",
            "RSTS2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2034,
        "hugoSymbol": "EPAS1",
        "name": "endothelial PAS domain protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000263734",
        "curatedRefSeq": "NM_001430.4",
        "geneAliases": [
            "MOP2",
            "HLF",
            "PASD2",
            "ECYT4",
            "HIF2A",
            "bHLHe73"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 126961,
        "hugoSymbol": "HIST2H3C",
        "name": "histone cluster 2, H3c",
        "oncogene": false,
        "curatedIsoform": "ENST00000369158",
        "curatedRefSeq": "NM_021059.2",
        "geneAliases": [
            "H3FN",
            "H3FM",
            "H3F2",
            "H3/M",
            "H3",
            "H3.2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7157,
        "hugoSymbol": "TP53",
        "name": "tumor protein p53",
        "oncogene": false,
        "curatedIsoform": "ENST00000269305",
        "curatedRefSeq": "NM_000546.5",
        "geneAliases": [
            "TRP53",
            "BCC7",
            "LFS1",
            "P53"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 7158,
        "hugoSymbol": "TP53BP1",
        "name": "tumor protein p53 binding protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000382044",
        "curatedRefSeq": "NM_001141980.1",
        "geneAliases": [
            "TDRD30",
            "p53BP1",
            "53BP1",
            "p202",
            "TP53"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4087,
        "hugoSymbol": "SMAD2",
        "name": "SMAD family member 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000262160",
        "curatedRefSeq": "NM_001003652.3",
        "geneAliases": [
            "hSMAD2",
            "JV18",
            "MADH2",
            "MADR2",
            "JV18-1",
            "hMAD-2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4088,
        "hugoSymbol": "SMAD3",
        "name": "SMAD family member 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000327367",
        "curatedRefSeq": "NM_005902.3",
        "geneAliases": [
            "MADH3",
            "LDS1C",
            "HSPC193",
            "LDS3",
            "HsT17436",
            "JV15-2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4089,
        "hugoSymbol": "SMAD4",
        "name": "SMAD family member 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000342988",
        "curatedRefSeq": "NM_005359.5",
        "geneAliases": [
            "JIP",
            "MADH4",
            "MYHRS",
            "DPC4"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2042,
        "hugoSymbol": "EPHA3",
        "name": "EPH receptor A3",
        "oncogene": false,
        "curatedIsoform": "ENST00000336596",
        "curatedRefSeq": "NM_005233.5",
        "geneAliases": [
            "ETK1",
            "HEK4",
            "TYRO4",
            "ETK",
            "EK4",
            "HEK"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1019,
        "hugoSymbol": "CDK4",
        "name": "cyclin dependent kinase 4",
        "oncogene": true,
        "curatedIsoform": "ENST00000257904",
        "curatedRefSeq": "NM_000075.3",
        "geneAliases": [
            "PSK-J3",
            "CMM3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2044,
        "hugoSymbol": "EPHA5",
        "name": "EPH receptor A5",
        "oncogene": false,
        "curatedIsoform": "ENST00000273854",
        "curatedRefSeq": "NM_004439.5",
        "geneAliases": [
            "EK7",
            "CEK7",
            "EHK-1",
            "HEK7",
            "EHK1",
            "TYRO4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9212,
        "hugoSymbol": "AURKB",
        "name": "aurora kinase B",
        "oncogene": true,
        "curatedIsoform": "ENST00000585124",
        "curatedRefSeq": "NM_004217.3",
        "geneAliases": [
            "PPP1R48",
            "AIK2",
            "AIM1",
            "STK12",
            "ARK2",
            "aurkb-sv2",
            "aurkb-sv1",
            "AurB",
            "STK5",
            "IPL1",
            "AIM-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1021,
        "hugoSymbol": "CDK6",
        "name": "cyclin dependent kinase 6",
        "oncogene": true,
        "curatedIsoform": "ENST00000265734",
        "curatedRefSeq": "NM_001145306.1",
        "geneAliases": [
            "PLSTIRE",
            "MCPH12"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2045,
        "hugoSymbol": "EPHA7",
        "name": "EPH receptor A7",
        "oncogene": false,
        "curatedIsoform": "ENST00000369303",
        "curatedRefSeq": "NM_004440.3",
        "geneAliases": [
            "EHK-3",
            "EK11",
            "HEK11",
            "EHK3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": -2,
        "hugoSymbol": "Other Biomarkers",
        "name": "Other Biomarkers",
        "oncogene": false,
        "curatedIsoform": null,
        "curatedRefSeq": null,
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 55294,
        "hugoSymbol": "FBXW7",
        "name": "F-box and WD repeat domain containing 7",
        "oncogene": false,
        "curatedIsoform": "ENST00000281708",
        "curatedRefSeq": "NM_033632.3",
        "geneAliases": [
            "FBX30",
            "hAgo",
            "FBXW6",
            "SEL-10",
            "hCdc4",
            "AGO",
            "FBW6",
            "SEL10",
            "FBW7",
            "CDC4",
            "FBXO30"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2047,
        "hugoSymbol": "EPHB1",
        "name": "EPH receptor B1",
        "oncogene": false,
        "curatedIsoform": "ENST00000398015",
        "curatedRefSeq": "NM_004441.4",
        "geneAliases": [
            "ELK",
            "EPHT2",
            "Hek6",
            "NET"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1024,
        "hugoSymbol": "CDK8",
        "name": "cyclin dependent kinase 8",
        "oncogene": false,
        "curatedIsoform": "ENST00000381527",
        "curatedRefSeq": "NM_001260.1",
        "geneAliases": [
            "K35"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1026,
        "hugoSymbol": "CDKN1A",
        "name": "cyclin dependent kinase inhibitor 1A",
        "oncogene": false,
        "curatedIsoform": "ENST00000244741",
        "curatedRefSeq": "NM_078467.2",
        "geneAliases": [
            "CIP1",
            "p21CIP1",
            "CDKN1",
            "WAF1",
            "CAP20",
            "P21",
            "MDA-6",
            "SDI1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 1027,
        "hugoSymbol": "CDKN1B",
        "name": "cyclin dependent kinase inhibitor 1B",
        "oncogene": false,
        "curatedIsoform": "ENST00000228872",
        "curatedRefSeq": "NM_004064.3",
        "geneAliases": [
            "CDKN4",
            "MEN1B",
            "MEN4",
            "P27KIP1",
            "KIP1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 1029,
        "hugoSymbol": "CDKN2A",
        "name": "cyclin dependent kinase inhibitor 2A",
        "oncogene": false,
        "curatedIsoform": "ENST00000304494",
        "curatedRefSeq": "NM_000077.4",
        "geneAliases": [
            "P16INK4A",
            "MTS1",
            "TP16",
            "P16INK4",
            "INK4",
            "P14ARF",
            "P19ARF",
            "CDK4I",
            "MLM",
            "CMM2",
            "P14",
            "MTS-1",
            "P16",
            "ARF",
            "P19",
            "INK4A",
            "P16-INK4A",
            "CDKN2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 1030,
        "hugoSymbol": "CDKN2B",
        "name": "cyclin dependent kinase inhibitor 2B",
        "oncogene": false,
        "curatedIsoform": "ENST00000276925",
        "curatedRefSeq": "NM_004936.3",
        "geneAliases": [
            "MTS2",
            "P15",
            "TP15",
            "INK4B",
            "CDK4I",
            "p15INK4b"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 1031,
        "hugoSymbol": "CDKN2C",
        "name": "cyclin dependent kinase inhibitor 2C",
        "oncogene": false,
        "curatedIsoform": "ENST00000262662",
        "curatedRefSeq": "NM_078626.2",
        "geneAliases": [
            "p18-INK4C",
            "p18",
            "INK4C"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 3082,
        "hugoSymbol": "HGF",
        "name": "hepatocyte growth factor",
        "oncogene": true,
        "curatedIsoform": "ENST00000222390",
        "curatedRefSeq": "NM_000601.4",
        "geneAliases": [
            "F-TCF",
            "SF",
            "DFNB39",
            "HPTA",
            "HGFB"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8202,
        "hugoSymbol": "NCOA3",
        "name": "nuclear receptor coactivator 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000371998",
        "curatedRefSeq": "NM_181659.2",
        "geneAliases": [
            "TNRC14",
            "AIB-1",
            "AIB1",
            "SRC3",
            "pCIP",
            "CTG26",
            "CAGH16",
            "bHLHe42",
            "KAT13B",
            "TRAM-1",
            "TNRC16",
            "RAC3",
            "SRC-3",
            "ACTR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5133,
        "hugoSymbol": "PDCD1",
        "name": "programmed cell death 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000334409",
        "curatedRefSeq": "NM_005018.2",
        "geneAliases": [
            "hPD-l",
            "SLEB2",
            "CD279",
            "PD1",
            "PD-1",
            "hSLE1",
            "hPD-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 171023,
        "hugoSymbol": "ASXL1",
        "name": "additional sex combs like 1, transcriptional regulator",
        "oncogene": false,
        "curatedIsoform": "ENST00000375687",
        "curatedRefSeq": "NM_015338.5",
        "geneAliases": [
            "MDS",
            "BOPS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2064,
        "hugoSymbol": "ERBB2",
        "name": "erb-b2 receptor tyrosine kinase 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000269571",
        "curatedRefSeq": "NM_004448.2",
        "geneAliases": [
            "CD340",
            "MLN 19",
            "TKR1",
            "NGL",
            "HER-2/neu",
            "HER2",
            "HER-2",
            "NEU"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2065,
        "hugoSymbol": "ERBB3",
        "name": "erb-b2 receptor tyrosine kinase 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000267101",
        "curatedRefSeq": "NM_001982.3",
        "geneAliases": [
            "ErbB-3",
            "p180-ErbB3",
            "p45-sErbB3",
            "LCCS2",
            "c-erbB-3",
            "c-erbB3",
            "p85-sErbB3",
            "MDA-BF-1",
            "erbB3-S",
            "HER3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2066,
        "hugoSymbol": "ERBB4",
        "name": "erb-b2 receptor tyrosine kinase 4",
        "oncogene": true,
        "curatedIsoform": "ENST00000342788",
        "curatedRefSeq": "NM_005235.2",
        "geneAliases": [
            "ALS19",
            "p180erbB4",
            "HER4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7186,
        "hugoSymbol": "TRAF2",
        "name": "TNF receptor associated factor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000247668",
        "curatedRefSeq": "NM_021138.3",
        "geneAliases": [
            "TRAP3",
            "MGC:45012",
            "TRAP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2068,
        "hugoSymbol": "ERCC2",
        "name": "ERCC excision repair 2, TFIIH core complex helicase subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000391945",
        "curatedRefSeq": "NM_000400.3",
        "geneAliases": [
            "EM9",
            "TTD",
            "TFIIH",
            "TTD1",
            "COFS2",
            "XPD"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 83990,
        "hugoSymbol": "BRIP1",
        "name": "BRCA1 interacting protein C-terminal helicase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000259008",
        "curatedRefSeq": "NM_032043.2",
        "geneAliases": [
            "FANCJ",
            "OF",
            "BACH1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2071,
        "hugoSymbol": "ERCC3",
        "name": "ERCC excision repair 3, TFIIH core complex helicase subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000285398",
        "curatedRefSeq": "NM_000122.1",
        "geneAliases": [
            "GTF2H",
            "BTF2",
            "TFIIH",
            "TTD2",
            "RAD25",
            "XPB"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 139285,
        "hugoSymbol": "AMER1",
        "name": "APC membrane recruitment protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000330258",
        "curatedRefSeq": "NM_152424.3",
        "geneAliases": [
            "FAM123B",
            "OSCS",
            "WTX"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2072,
        "hugoSymbol": "ERCC4",
        "name": "ERCC excision repair 4, endonuclease catalytic subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000311895",
        "curatedRefSeq": "NM_005236.2",
        "geneAliases": [
            "XFEPS",
            "FANCQ",
            "RAD1",
            "ERCC11",
            "XPF"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 25,
        "hugoSymbol": "ABL1",
        "name": "ABL proto-oncogene 1, non-receptor tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000318560",
        "curatedRefSeq": "NM_005157.4",
        "geneAliases": [
            "v-abl",
            "bcr/abl",
            "JTK7",
            "c-ABL1",
            "c-ABL",
            "ABL",
            "p150"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2073,
        "hugoSymbol": "ERCC5",
        "name": "ERCC excision repair 5, endonuclease",
        "oncogene": false,
        "curatedIsoform": "ENST00000355739",
        "curatedRefSeq": "NM_000123.3",
        "geneAliases": [
            "ERCC5-201",
            "UVDR",
            "ERCM2",
            "XPGC",
            "XPG",
            "COFS3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1050,
        "hugoSymbol": "CEBPA",
        "name": "CCAAT/enhancer binding protein alpha",
        "oncogene": false,
        "curatedIsoform": "ENST00000498907",
        "curatedRefSeq": "NM_004364.3",
        "geneAliases": [
            "C/EBP-alpha",
            "CEBP"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2077,
        "hugoSymbol": "ERF",
        "name": "ETS2 repressor factor",
        "oncogene": false,
        "curatedIsoform": "ENST00000222329",
        "curatedRefSeq": "NM_006494.2",
        "geneAliases": [
            "PE2",
            "CRS4",
            "PE-2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2078,
        "hugoSymbol": "ERG",
        "name": "ERG, ETS transcription factor",
        "oncogene": true,
        "curatedIsoform": "ENST00000288319",
        "curatedRefSeq": "NM_182918.3",
        "geneAliases": [
            "p55",
            "erg-3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3105,
        "hugoSymbol": "HLA-A",
        "name": "major histocompatibility complex, class I, A",
        "oncogene": false,
        "curatedIsoform": "ENST00000376809",
        "curatedRefSeq": "NM_001242758.1",
        "geneAliases": [
            "HLAA",
            "HLA-A11",
            "HLA-A33",
            "Aw-33",
            "Aw-74",
            "HLA-DRB1",
            "HLA-DQB1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 1058,
        "hugoSymbol": "CENPA",
        "name": "centromere protein A",
        "oncogene": false,
        "curatedIsoform": "ENST00000335756",
        "curatedRefSeq": "NM_001809.3",
        "geneAliases": [
            "CenH3",
            "CENP-A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3106,
        "hugoSymbol": "HLA-B",
        "name": "major histocompatibility complex, class I, B",
        "oncogene": false,
        "curatedIsoform": "ENST00000412585",
        "curatedRefSeq": "NM_005514.6",
        "geneAliases": [
            "HEL-S-83",
            "SPDA1",
            "HLA-B39",
            "B-4901",
            "Bw-47",
            "HLAB",
            "HLA-B55",
            "HLA-B-3905",
            "Bw-50",
            "HLA-B*45ZJ",
            "HLA-B-3506",
            "HLA-B15",
            "HLA-B59",
            "HLA-B-5502",
            "HLA-B49",
            "HLA-B-5602",
            "HLA-Cw",
            "AS",
            "B-5001",
            "HLA-B50",
            "HLA-B61",
            "HLA-DRB1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5156,
        "hugoSymbol": "PDGFRA",
        "name": "platelet derived growth factor receptor alpha",
        "oncogene": true,
        "curatedIsoform": "ENST00000257290",
        "curatedRefSeq": "NM_006206.4",
        "geneAliases": [
            "PDGFR2",
            "RHEPDGFRA",
            "GAS9",
            "PDGFR-2",
            "CD140A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5159,
        "hugoSymbol": "PDGFRB",
        "name": "platelet derived growth factor receptor beta",
        "oncogene": true,
        "curatedIsoform": "ENST00000261799",
        "curatedRefSeq": "NM_002609.3",
        "geneAliases": [
            "PDGFR1",
            "KOGS",
            "PDGFR-1",
            "JTK12",
            "PDGFR",
            "IBGC4",
            "IMF1",
            "PENTT",
            "CD140B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8233,
        "hugoSymbol": "ZRSR2",
        "name": "zinc finger CCCH-type, RNA binding motif and serine/arginine rich 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000307771",
        "curatedRefSeq": "NM_005089.3",
        "geneAliases": [
            "URP",
            "ZC3H22",
            "U2AF1-RS2",
            "U2AF1RS2",
            "U2AF1L2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8241,
        "hugoSymbol": "RBM10",
        "name": "RNA binding motif protein 10",
        "oncogene": false,
        "curatedIsoform": "ENST00000329236",
        "curatedRefSeq": "NM_001204468.1",
        "geneAliases": [
            "GPATCH9",
            "S1-1",
            "TARPS",
            "DXS8237E",
            "GPATC9",
            "ZRANB5"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5170,
        "hugoSymbol": "PDPK1",
        "name": "3-phosphoinositide dependent protein kinase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000342085",
        "curatedRefSeq": "NM_002613.4",
        "geneAliases": [
            "PRO0461",
            "PDPK2",
            "PDPK2P",
            "PDK1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8242,
        "hugoSymbol": "KDM5C",
        "name": "lysine demethylase 5C",
        "oncogene": false,
        "curatedIsoform": "ENST00000375401",
        "curatedRefSeq": "NM_004187.3",
        "geneAliases": [
            "MRXJ",
            "JARID1C",
            "MRX13",
            "MRXSCJ",
            "MRXSJ",
            "SMCX",
            "DXS1272E",
            "XE169"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2099,
        "hugoSymbol": "ESR1",
        "name": "estrogen receptor 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000206249",
        "curatedRefSeq": "NM_001122740.1",
        "geneAliases": [
            "ESR",
            "ESTRR",
            "Era",
            "ER",
            "ESRA",
            "NR3A1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4149,
        "hugoSymbol": "MAX",
        "name": "MYC associated factor X",
        "oncogene": false,
        "curatedIsoform": "ENST00000358664",
        "curatedRefSeq": "NM_002382.4",
        "geneAliases": [
            "bHLHd4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6199,
        "hugoSymbol": "RPS6KB2",
        "name": "ribosomal protein S6 kinase B2",
        "oncogene": false,
        "curatedIsoform": "ENST00000312629",
        "curatedRefSeq": "NM_003952.2",
        "geneAliases": [
            "P70-beta-1",
            "P70-beta",
            "P70-beta-2",
            "STK14B",
            "KLS",
            "p70(S6K)-beta",
            "S6K-beta2",
            "S6K2",
            "p70S6Kb",
            "SRK"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2115,
        "hugoSymbol": "ETV1",
        "name": "ETS variant 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000405192",
        "curatedRefSeq": "NM_001163147.1",
        "geneAliases": [
            "ER81"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2118,
        "hugoSymbol": "ETV4",
        "name": "ETS variant 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000319349",
        "curatedRefSeq": "NM_001079675.2",
        "geneAliases": [
            "E1AF",
            "PEA3",
            "PEAS3",
            "E1A-F"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2120,
        "hugoSymbol": "ETV6",
        "name": "ETS variant 6",
        "oncogene": true,
        "curatedIsoform": "ENST00000396373",
        "curatedRefSeq": "NM_001987.4",
        "geneAliases": [
            "THC5",
            "TEL/ABL",
            "TEL"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4170,
        "hugoSymbol": "MCL1",
        "name": "BCL2 family apoptosis regulator",
        "oncogene": false,
        "curatedIsoform": "ENST00000369026",
        "curatedRefSeq": "NM_021960.4",
        "geneAliases": [
            "Mcl-1",
            "bcl2-L-3",
            "MCL1S",
            "EAT",
            "TM",
            "mcl1/EAT",
            "MCL1-ES",
            "BCL2L3",
            "MCL1L"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7248,
        "hugoSymbol": "TSC1",
        "name": "tuberous sclerosis 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000298552",
        "curatedRefSeq": "NM_000368.4",
        "geneAliases": [
            "TSC",
            "LAM"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 10320,
        "hugoSymbol": "IKZF1",
        "name": "IKAROS family zinc finger 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000331340",
        "curatedRefSeq": "ENST00000331340",
        "geneAliases": [
            "CVID13",
            "IKAROS",
            "PRO0758",
            "LyF-1",
            "LYF1",
            "Hs.54452",
            "ZNFN1A1",
            "IK1",
            "PPP1R92"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7249,
        "hugoSymbol": "TSC2",
        "name": "tuberous sclerosis 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000219476",
        "curatedRefSeq": "NM_000548.3",
        "geneAliases": [
            "PPP1R160",
            "TSC4",
            "LAM"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2130,
        "hugoSymbol": "EWSR1",
        "name": "EWS RNA binding protein 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000397938",
        "curatedRefSeq": "NM_005243.3",
        "geneAliases": [
            "EWS",
            "EWS-FLI1",
            "bK984G1.4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7253,
        "hugoSymbol": "TSHR",
        "name": "thyroid stimulating hormone receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000298171",
        "curatedRefSeq": "NM_000369.2",
        "geneAliases": [
            "CHNG1",
            "LGR3",
            "hTSHR-I"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1111,
        "hugoSymbol": "CHEK1",
        "name": "checkpoint kinase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000428830",
        "curatedRefSeq": "NM_001274.5",
        "geneAliases": [
            "CHK1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 90,
        "hugoSymbol": "ACVR1",
        "name": "activin A receptor type 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000263640",
        "curatedRefSeq": "NM_001111067.2",
        "geneAliases": [
            "SKR1",
            "TSRI",
            "FOP",
            "ACVRLK2",
            "ACTRI",
            "ALK2",
            "ACVR1A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6237,
        "hugoSymbol": "RRAS",
        "name": "related RAS viral (r-ras) oncogene homolog",
        "oncogene": false,
        "curatedIsoform": "ENST00000246792",
        "curatedRefSeq": "NM_006270.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 2145,
        "hugoSymbol": "EZH1",
        "name": "enhancer of zeste 1 polycomb repressive complex 2 subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000428826",
        "curatedRefSeq": "NM_001991.3",
        "geneAliases": [
            "KMT6B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3169,
        "hugoSymbol": "FOXA1",
        "name": "forkhead box A1",
        "oncogene": true,
        "curatedIsoform": "ENST00000250448",
        "curatedRefSeq": "NM_004496.3",
        "geneAliases": [
            "HNF3A",
            "TCF3A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4193,
        "hugoSymbol": "MDM2",
        "name": "MDM2 proto-oncogene",
        "oncogene": true,
        "curatedIsoform": "ENST00000462284",
        "curatedRefSeq": "NM_002392.5",
        "geneAliases": [
            "hdm2",
            "HDMX",
            "ACTFS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8289,
        "hugoSymbol": "ARID1A",
        "name": "AT-rich interaction domain 1A",
        "oncogene": false,
        "curatedIsoform": "ENST00000324856",
        "curatedRefSeq": "NM_006015.4",
        "geneAliases": [
            "MRD14",
            "hOSA1",
            "BAF250a",
            "C1orf4",
            "hELD",
            "SMARCF1",
            "BM029",
            "CSS2",
            "OSA1",
            "BAF250",
            "B120",
            "ELD",
            "P270"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2146,
        "hugoSymbol": "EZH2",
        "name": "enhancer of zeste 2 polycomb repressive complex 2 subunit",
        "oncogene": true,
        "curatedIsoform": "ENST00000320356",
        "curatedRefSeq": "NM_004456.4",
        "geneAliases": [
            "ENX-1",
            "ENX1",
            "EZH2b",
            "WVS",
            "WVS2",
            "KMT6",
            "KMT6A",
            "EZH1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4194,
        "hugoSymbol": "MDM4",
        "name": "MDM4, p53 regulator",
        "oncogene": true,
        "curatedIsoform": "ENST00000367182",
        "curatedRefSeq": "NM_002393.4",
        "geneAliases": [
            "MRP1",
            "HDMX",
            "MDMX"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8290,
        "hugoSymbol": "HIST3H3",
        "name": "histone cluster 3, H3",
        "oncogene": false,
        "curatedIsoform": "ENST00000366696",
        "curatedRefSeq": "NM_003493.2",
        "geneAliases": [
            "H3.4",
            "H3/g",
            "H3FT",
            "H3t"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9314,
        "hugoSymbol": "KLF4",
        "name": "Kruppel like factor 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000374672",
        "curatedRefSeq": "NM_004235.4",
        "geneAliases": [
            "EZF",
            "GKLF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4207,
        "hugoSymbol": "BORCS8-MEF2B",
        "name": "BORCS8-MEF2B readthrough",
        "oncogene": false,
        "curatedIsoform": null,
        "curatedRefSeq": null,
        "geneAliases": [
            "LOC729991-MEF2B",
            "MEF2B",
            "MEF2BNB-MEF2B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 333932,
        "hugoSymbol": "HIST2H3A",
        "name": "histone cluster 2, H3a",
        "oncogene": false,
        "curatedIsoform": "ENST00000331491",
        "curatedRefSeq": "NM_001005464.2",
        "geneAliases": [
            "H3/o",
            "H3/n"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6256,
        "hugoSymbol": "RXRA",
        "name": "retinoid X receptor alpha",
        "oncogene": false,
        "curatedIsoform": "ENST00000481739",
        "curatedRefSeq": "NM_002957.4",
        "geneAliases": [
            "NR2B1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4214,
        "hugoSymbol": "MAP3K1",
        "name": "mitogen-activated protein kinase kinase kinase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000399503",
        "curatedRefSeq": "NM_005921.1",
        "geneAliases": [
            "MEKK1",
            "MAPKKK1",
            "MEKK",
            "MEKK 1",
            "SRXY6"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8312,
        "hugoSymbol": "AXIN1",
        "name": "axin 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000262320",
        "curatedRefSeq": "NM_003502.3",
        "geneAliases": [
            "AXIN",
            "PPP1R49"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5241,
        "hugoSymbol": "PGR",
        "name": "progesterone receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000325455",
        "curatedRefSeq": "NM_000926.4",
        "geneAliases": [
            "PR",
            "NR3C3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8313,
        "hugoSymbol": "AXIN2",
        "name": "axin 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000307078",
        "curatedRefSeq": "NM_004655.3",
        "geneAliases": [
            "AXIL",
            "ODCRCS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8314,
        "hugoSymbol": "BAP1",
        "name": "BRCA1 associated protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000460680",
        "curatedRefSeq": "NM_004656.3",
        "geneAliases": [
            "HUCEP-13",
            "hucep-6",
            "UCHL2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4221,
        "hugoSymbol": "MEN1",
        "name": "menin 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000337652",
        "curatedRefSeq": "NM_000244.3",
        "geneAliases": [
            "MEAI",
            "SCG2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2175,
        "hugoSymbol": "FANCA",
        "name": "Fanconi anemia complementation group A",
        "oncogene": false,
        "curatedIsoform": "ENST00000389301",
        "curatedRefSeq": "NM_000135.2",
        "geneAliases": [
            "FANCH",
            "FA-H",
            "FA1",
            "FAA",
            "FACA",
            "FA",
            "FAH"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2176,
        "hugoSymbol": "FANCC",
        "name": "Fanconi anemia complementation group C",
        "oncogene": false,
        "curatedIsoform": "ENST00000289081",
        "curatedRefSeq": "NM_000136.2",
        "geneAliases": [
            "FA3",
            "FAC",
            "FACC"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4233,
        "hugoSymbol": "MET",
        "name": "MET proto-oncogene, receptor tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000397752",
        "curatedRefSeq": "NM_000245.2",
        "geneAliases": [
            "RCCP2",
            "HGFR",
            "c-Met",
            "DFNB97",
            "AUTS9"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7307,
        "hugoSymbol": "U2AF1",
        "name": "U2 small nuclear RNA auxiliary factor 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000291552",
        "curatedRefSeq": "NM_006758.2",
        "geneAliases": [
            "FP793",
            "U2AFBP",
            "RN",
            "RNU2AF1",
            "U2AF35"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 58508,
        "hugoSymbol": "KMT2C",
        "name": "lysine methyltransferase 2C",
        "oncogene": false,
        "curatedIsoform": "ENST00000262189",
        "curatedRefSeq": "NM_170606.2",
        "geneAliases": [
            "MLL3",
            "HALR"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 142,
        "hugoSymbol": "PARP1",
        "name": "poly(ADP-ribose) polymerase 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000366794",
        "curatedRefSeq": "NM_001618.3",
        "geneAliases": [
            "pADPRT-1",
            "PPOL",
            "ARTD1",
            "PARP",
            "ADPRT",
            "ADPRT 1",
            "ADPRT1",
            "PARP-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2195,
        "hugoSymbol": "FAT1",
        "name": "FAT atypical cadherin 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000441802",
        "curatedRefSeq": "NM_005245.3",
        "geneAliases": [
            "CDHF7",
            "FAT",
            "hFat1",
            "ME5",
            "CDHR8"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 57492,
        "hugoSymbol": "ARID1B",
        "name": "AT-rich interaction domain 1B",
        "oncogene": false,
        "curatedIsoform": "ENST00000346085",
        "curatedRefSeq": "NM_020732.3",
        "geneAliases": [
            "OSA2",
            "CSS1",
            "MRD12",
            "BAF250B",
            "6A3-5",
            "DAN15",
            "ELD/OSA1",
            "P250R",
            "BRIGHT"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8350,
        "hugoSymbol": "HIST1H3A",
        "name": "histone cluster 1, H3a",
        "oncogene": false,
        "curatedIsoform": "ENST00000357647",
        "curatedRefSeq": "NM_003529.2",
        "geneAliases": [
            "H3FA",
            "H3/A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8351,
        "hugoSymbol": "HIST1H3D",
        "name": "histone cluster 1, H3d",
        "oncogene": false,
        "curatedIsoform": "ENST00000356476",
        "curatedRefSeq": "NM_003530.4",
        "geneAliases": [
            "H3FB",
            "H3/b"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8352,
        "hugoSymbol": "HIST1H3C",
        "name": "histone cluster 1, H3c",
        "oncogene": false,
        "curatedIsoform": "ENST00000540144",
        "curatedRefSeq": "NM_003531.2",
        "geneAliases": [
            "H3FC",
            "H3/c",
            "H3.1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8353,
        "hugoSymbol": "HIST1H3E",
        "name": "histone cluster 1, H3e",
        "oncogene": false,
        "curatedIsoform": "ENST00000360408",
        "curatedRefSeq": "NM_003532.2",
        "geneAliases": [
            "H3/d",
            "H3FD",
            "H3.1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8354,
        "hugoSymbol": "HIST1H3I",
        "name": "histone cluster 1, H3i",
        "oncogene": false,
        "curatedIsoform": "ENST00000328488",
        "curatedRefSeq": "NM_003533.2",
        "geneAliases": [
            "H3.f",
            "H3/f",
            "H3FF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8355,
        "hugoSymbol": "HIST1H3G",
        "name": "histone cluster 1, H3g",
        "oncogene": false,
        "curatedIsoform": "ENST00000305910",
        "curatedRefSeq": "NM_003534.2",
        "geneAliases": [
            "H3/h",
            "H3FH"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8356,
        "hugoSymbol": "HIST1H3J",
        "name": "histone cluster 1, H3j",
        "oncogene": false,
        "curatedIsoform": "ENST00000359303",
        "curatedRefSeq": "NM_003535.2",
        "geneAliases": [
            "H3/j",
            "H3FJ"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8357,
        "hugoSymbol": "HIST1H3H",
        "name": "histone cluster 1, H3h",
        "oncogene": false,
        "curatedIsoform": "ENST00000369163",
        "curatedRefSeq": "NM_003536.2",
        "geneAliases": [
            "H3FK",
            "H3/k",
            "H3F1K"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8358,
        "hugoSymbol": "HIST1H3B",
        "name": "histone cluster 1, H3b",
        "oncogene": false,
        "curatedIsoform": "ENST00000244661",
        "curatedRefSeq": "NM_003537.3",
        "geneAliases": [
            "H3FL",
            "H3/l"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5288,
        "hugoSymbol": "PIK3C2G",
        "name": "phosphatidylinositol-4-phosphate 3-kinase catalytic subunit type 2 gamma",
        "oncogene": false,
        "curatedIsoform": "ENST00000266497",
        "curatedRefSeq": "NM_004570.4",
        "geneAliases": [
            "PI3K-C2GAMMA",
            "PI3K-C2-gamma"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5289,
        "hugoSymbol": "PIK3C3",
        "name": "phosphatidylinositol 3-kinase catalytic subunit type 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000262039",
        "curatedRefSeq": "NM_002647.2",
        "geneAliases": [
            "Vps34",
            "hVps34",
            "VPS34"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5290,
        "hugoSymbol": "PIK3CA",
        "name": "phosphatidylinositol-4,5-bisphosphate 3-kinase catalytic subunit alpha",
        "oncogene": true,
        "curatedIsoform": "ENST00000263967",
        "curatedRefSeq": "NM_006218.2",
        "geneAliases": [
            "MCAP",
            "p110-alpha",
            "PI3K",
            "CLOVE",
            "MCM",
            "PI3K-alpha",
            "CWS5",
            "MCMTC"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5291,
        "hugoSymbol": "PIK3CB",
        "name": "phosphatidylinositol-4,5-bisphosphate 3-kinase catalytic subunit beta",
        "oncogene": true,
        "curatedIsoform": "ENST00000289153",
        "curatedRefSeq": "NM_006219.2",
        "geneAliases": [
            "P110BETA",
            "PI3K",
            "PIK3C1",
            "PI3KBETA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 257194,
        "hugoSymbol": "NEGR1",
        "name": "neuronal growth regulator 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000357731",
        "curatedRefSeq": "NM_173808.2",
        "geneAliases": [
            "Ntra",
            "DMML2433",
            "IGLON4",
            "KILON"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5292,
        "hugoSymbol": "PIM1",
        "name": "Pim-1 proto-oncogene, serine/threonine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000373509",
        "curatedRefSeq": "NM_002648.3",
        "geneAliases": [
            "PIM"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5293,
        "hugoSymbol": "PIK3CD",
        "name": "phosphatidylinositol-4,5-bisphosphate 3-kinase catalytic subunit delta",
        "oncogene": true,
        "curatedIsoform": "ENST00000377346",
        "curatedRefSeq": "NM_005026.3",
        "geneAliases": [
            "APDS",
            "PI3K",
            "p110D",
            "IMD14",
            "P110DELTA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10413,
        "hugoSymbol": "YAP1",
        "name": "Yes associated protein 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000282441",
        "curatedRefSeq": "NM_001130145.2",
        "geneAliases": [
            "YAP2",
            "YAP65",
            "COB1",
            "YKI",
            "YAP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 84142,
        "hugoSymbol": "FAM175A",
        "name": "family with sequence similarity 175 member A",
        "oncogene": false,
        "curatedIsoform": "ENST00000321945",
        "curatedRefSeq": "NM_139076.2",
        "geneAliases": [
            "ABRA1",
            "CCDC98"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5294,
        "hugoSymbol": "PIK3CG",
        "name": "phosphatidylinositol-4,5-bisphosphate 3-kinase catalytic subunit gamma",
        "oncogene": true,
        "curatedIsoform": "ENST00000359195",
        "curatedRefSeq": "NM_002649.2",
        "geneAliases": [
            "PI3K",
            "PIK3",
            "p120-PI3K",
            "PI3CG",
            "p110gamma",
            "PI3Kgamma"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5295,
        "hugoSymbol": "PIK3R1",
        "name": "phosphoinositide-3-kinase regulatory subunit 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000274335",
        "curatedRefSeq": "NM_181523.2",
        "geneAliases": [
            "p85-ALPHA",
            "GRB1",
            "IMD36",
            "p85",
            "AGM7"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5296,
        "hugoSymbol": "PIK3R2",
        "name": "phosphoinositide-3-kinase regulatory subunit 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000222254",
        "curatedRefSeq": "NM_005027.3",
        "geneAliases": [
            "P85B",
            "MPPH1",
            "p85-BETA",
            "p85",
            "MPPH"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 57521,
        "hugoSymbol": "RPTOR",
        "name": "regulatory associated protein of MTOR complex 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000306801",
        "curatedRefSeq": "NM_020761.2",
        "geneAliases": [
            "Mip1",
            "KOG1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9401,
        "hugoSymbol": "RECQL4",
        "name": "RecQ like helicase 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000428558",
        "curatedRefSeq": "ENST00000428558",
        "geneAliases": [
            "RECQ4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4286,
        "hugoSymbol": "MITF",
        "name": "melanogenesis associated transcription factor",
        "oncogene": false,
        "curatedIsoform": "ENST00000352241",
        "curatedRefSeq": "NM_198159.2",
        "geneAliases": [
            "bHLHe32",
            "WS2A",
            "WS2",
            "CMM8",
            "MI"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 84159,
        "hugoSymbol": "ARID5B",
        "name": "AT-rich interaction domain 5B",
        "oncogene": false,
        "curatedIsoform": "ENST00000279873",
        "curatedRefSeq": "NM_032199.2",
        "geneAliases": [
            "MRF-2",
            "MRF2",
            "DESRT"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 3265,
        "hugoSymbol": "HRAS",
        "name": "HRas proto-oncogene, GTPase",
        "oncogene": true,
        "curatedIsoform": "ENST00000311189",
        "curatedRefSeq": "NM_001130442.1",
        "geneAliases": [
            "C-H-RAS",
            "HAMSV",
            "p21ras",
            "C-BAS/HAS",
            "HRAS1",
            "CTLO",
            "H-RASIDX",
            "C-HA-RAS1",
            "RASH1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4292,
        "hugoSymbol": "MLH1",
        "name": "mutL homolog 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000231790",
        "curatedRefSeq": "NM_000249.3",
        "geneAliases": [
            "HNPCC",
            "HNPCC2",
            "FCC2",
            "COCA2",
            "hMLH1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2248,
        "hugoSymbol": "FGF3",
        "name": "fibroblast growth factor 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000334134",
        "curatedRefSeq": "NM_005247.2",
        "geneAliases": [
            "INT2",
            "HBGF-3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2249,
        "hugoSymbol": "FGF4",
        "name": "fibroblast growth factor 4",
        "oncogene": true,
        "curatedIsoform": "ENST00000168712",
        "curatedRefSeq": "NM_002007.2",
        "geneAliases": [
            "HBGF-4",
            "HST-1",
            "K-FGF",
            "HST",
            "HSTF1",
            "KFGF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4297,
        "hugoSymbol": "KMT2A",
        "name": "lysine methyltransferase 2A",
        "oncogene": false,
        "curatedIsoform": "ENST00000534358",
        "curatedRefSeq": "NM_001197104.1",
        "geneAliases": [
            "MLL-AF9",
            "MLL1",
            "TRX1",
            "HTRX1",
            "TET1-MLL",
            "ALL-1",
            "MLL/GAS7",
            "MLL",
            "MLL1A",
            "CXXC7",
            "HRX",
            "WDSTS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 207,
        "hugoSymbol": "AKT1",
        "name": "AKT serine/threonine kinase 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000349310",
        "curatedRefSeq": "NM_001014431.1",
        "geneAliases": [
            "PRKBA",
            "RAC",
            "PKB",
            "CWS6",
            "AKT",
            "RAC-ALPHA",
            "PKB-ALPHA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 208,
        "hugoSymbol": "AKT2",
        "name": "AKT serine/threonine kinase 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000392038",
        "curatedRefSeq": "NM_001626.4",
        "geneAliases": [
            "HIHGHH",
            "PRKBB",
            "PKBBETA",
            "RAC-BETA",
            "PKBB"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2260,
        "hugoSymbol": "FGFR1",
        "name": "fibroblast growth factor receptor 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000425967",
        "curatedRefSeq": "NM_001174067.1",
        "geneAliases": [
            "FLG",
            "N-SAM",
            "FLT2",
            "ECCL",
            "CEK",
            "HBGFR",
            "HRTFDS",
            "BFGFR",
            "FGFR-1",
            "FLT-2",
            "OGD",
            "FGFBR",
            "HH2",
            "bFGF-R-1",
            "CD331",
            "KAL2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2261,
        "hugoSymbol": "FGFR3",
        "name": "fibroblast growth factor receptor 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000260795",
        "curatedRefSeq": "NM_000142.4",
        "geneAliases": [
            "JTK4",
            "HSFGFR3EX",
            "ACH",
            "CEK2",
            "CD333"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8405,
        "hugoSymbol": "SPOP",
        "name": "speckle type BTB/POZ protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000347630",
        "curatedRefSeq": "NM_001007228.1",
        "geneAliases": [
            "TEF2",
            "BTBD32"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2263,
        "hugoSymbol": "FGFR2",
        "name": "fibroblast growth factor receptor 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000358487",
        "curatedRefSeq": "NM_000141.4",
        "geneAliases": [
            "BBDS",
            "BFR-1",
            "CEK3",
            "JWS",
            "BEK",
            "K-SAM",
            "KGFR",
            "ECT1",
            "TK14",
            "TK25",
            "CD332",
            "CFD1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2264,
        "hugoSymbol": "FGFR4",
        "name": "fibroblast growth factor receptor 4",
        "oncogene": true,
        "curatedIsoform": "ENST00000292408",
        "curatedRefSeq": "NM_213647.1",
        "geneAliases": [
            "JTK2",
            "CD334",
            "TKF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5336,
        "hugoSymbol": "PLCG2",
        "name": "phospholipase C gamma 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000359376",
        "curatedRefSeq": "NM_002661.3",
        "geneAliases": [
            "PLC-IV",
            "PLC-gamma-2",
            "APLAID",
            "FCAS3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2271,
        "hugoSymbol": "FH",
        "name": "fumarate hydratase",
        "oncogene": false,
        "curatedIsoform": "ENST00000366560",
        "curatedRefSeq": "NM_000143.3",
        "geneAliases": [
            "HLRCC",
            "LRCC",
            "MCL",
            "MCUL1",
            "FMRD"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 7403,
        "hugoSymbol": "KDM6A",
        "name": "lysine demethylase 6A",
        "oncogene": false,
        "curatedIsoform": "ENST00000377967",
        "curatedRefSeq": "NM_021140.2",
        "geneAliases": [
            "UTX",
            "bA386N14.2",
            "KABUK2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 238,
        "hugoSymbol": "ALK",
        "name": "anaplastic lymphoma receptor tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000389048",
        "curatedRefSeq": "NM_004304.4",
        "geneAliases": [
            "NBLST3",
            "CD246"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10481,
        "hugoSymbol": "HOXB13",
        "name": "homeobox B13",
        "oncogene": false,
        "curatedIsoform": "ENST00000290295",
        "curatedRefSeq": "NM_006361.5",
        "geneAliases": [
            "PSGD"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 242,
        "hugoSymbol": "ALOX12B",
        "name": "arachidonate 12-lipoxygenase, 12R type",
        "oncogene": false,
        "curatedIsoform": "ENST00000319144",
        "curatedRefSeq": "NM_001139.2",
        "geneAliases": [
            "ARCI2",
            "12R-LOX"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 64754,
        "hugoSymbol": "SMYD3",
        "name": "SET and MYND domain containing 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000388985",
        "curatedRefSeq": "NM_001167740.1",
        "geneAliases": [
            "KMT3E",
            "bA74P14.1",
            "ZNFN3A1",
            "ZMYND1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6389,
        "hugoSymbol": "SDHA",
        "name": "succinate dehydrogenase complex flavoprotein subunit A",
        "oncogene": false,
        "curatedIsoform": "ENST00000264932",
        "curatedRefSeq": "NM_004168.2",
        "geneAliases": [
            "PGL5",
            "CMD1GG",
            "SDHF",
            "FP",
            "SDH1",
            "SDH2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5366,
        "hugoSymbol": "PMAIP1",
        "name": "phorbol-12-myristate-13-acetate-induced protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000316660",
        "curatedRefSeq": "NM_021127.2",
        "geneAliases": [
            "APR",
            "NOXA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6390,
        "hugoSymbol": "SDHB",
        "name": "succinate dehydrogenase complex iron sulfur subunit B",
        "oncogene": false,
        "curatedIsoform": "ENST00000375499",
        "curatedRefSeq": "NM_003000.2",
        "geneAliases": [
            "SDH",
            "IP",
            "PGL4",
            "CWS2",
            "SDH1",
            "SDH2",
            "SDHIP"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8438,
        "hugoSymbol": "RAD54L",
        "name": "RAD54-like (S. cerevisiae)",
        "oncogene": false,
        "curatedIsoform": "ENST00000371975",
        "curatedRefSeq": "NM_001142548.1",
        "geneAliases": [
            "hRAD54",
            "HR54",
            "hHR54",
            "RAD54A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6391,
        "hugoSymbol": "SDHC",
        "name": "succinate dehydrogenase complex subunit C",
        "oncogene": false,
        "curatedIsoform": "ENST00000367975",
        "curatedRefSeq": "NM_003001.3",
        "geneAliases": [
            "CYB560",
            "SDH3",
            "PGL3",
            "QPS1",
            "CYBL"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 6392,
        "hugoSymbol": "SDHD",
        "name": "succinate dehydrogenase complex subunit D",
        "oncogene": false,
        "curatedIsoform": "ENST00000375549",
        "curatedRefSeq": "NM_003002.3",
        "geneAliases": [
            "CBT1",
            "PGL",
            "CII-4",
            "PGL1",
            "QPs3",
            "cybS",
            "CWS3",
            "SDH4"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 7422,
        "hugoSymbol": "VEGFA",
        "name": "vascular endothelial growth factor A",
        "oncogene": false,
        "curatedIsoform": "ENST00000523873",
        "curatedRefSeq": "NM_001171623.1",
        "geneAliases": [
            "MVCD1",
            "VEGF",
            "VPF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4352,
        "hugoSymbol": "MPL",
        "name": "MPL proto-oncogene, thrombopoietin receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000372470",
        "curatedRefSeq": "NM_005373.2",
        "geneAliases": [
            "CD110",
            "THCYT2",
            "TPOR",
            "MPLV",
            "C-MPL"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5378,
        "hugoSymbol": "PMS1",
        "name": "PMS1 homolog 1, mismatch repair system component",
        "oncogene": false,
        "curatedIsoform": "ENST00000441310",
        "curatedRefSeq": "NM_000534.4",
        "geneAliases": [
            "PMSL1",
            "HNPCC3",
            "hPMS1",
            "MLH2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10498,
        "hugoSymbol": "CARM1",
        "name": "coactivator associated arginine methyltransferase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000327064",
        "curatedRefSeq": "NM_199141.1",
        "geneAliases": [
            "PRMT4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2308,
        "hugoSymbol": "FOXO1",
        "name": "forkhead box O1",
        "oncogene": false,
        "curatedIsoform": "ENST00000379561",
        "curatedRefSeq": "NM_002015.3",
        "geneAliases": [
            "FOXO1A",
            "FKH1",
            "FKHR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7428,
        "hugoSymbol": "VHL",
        "name": "von Hippel-Lindau tumor suppressor",
        "oncogene": false,
        "curatedIsoform": "ENST00000256474",
        "curatedRefSeq": "NM_000551.3",
        "geneAliases": [
            "HRCA1",
            "RCA1",
            "pVHL",
            "VHL1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8452,
        "hugoSymbol": "CUL3",
        "name": "cullin 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000264414",
        "curatedRefSeq": "NM_003590.4",
        "geneAliases": [
            "PHA2E",
            "CUL-3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 79109,
        "hugoSymbol": "MAPKAP1",
        "name": "mitogen-activated protein kinase associated protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000265960",
        "curatedRefSeq": "NM_001006617.1",
        "geneAliases": [
            "MIP1",
            "SIN1b",
            "JC310",
            "SIN1g",
            "SIN1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 84231,
        "hugoSymbol": "TRAF7",
        "name": "TNF receptor associated factor 7",
        "oncogene": false,
        "curatedIsoform": "ENST00000326181",
        "curatedRefSeq": "NM_032271.2",
        "geneAliases": [
            "RFWD1",
            "RNF119"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3337,
        "hugoSymbol": "DNAJB1",
        "name": "DnaJ heat shock protein family (Hsp40) member B1",
        "oncogene": false,
        "curatedIsoform": "ENST00000254322",
        "curatedRefSeq": "NM_006145.1",
        "geneAliases": [
            "Hdj1",
            "Sis1",
            "HSPF1",
            "Hsp40",
            "RSPH16B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4361,
        "hugoSymbol": "MRE11A",
        "name": "MRE11 homolog A, double strand break repair nuclease",
        "oncogene": false,
        "curatedIsoform": "ENST00000323929",
        "curatedRefSeq": "NM_005591.3",
        "geneAliases": [
            "MRE11",
            "HNGS1",
            "ATLD",
            "MRE11B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6416,
        "hugoSymbol": "MAP2K4",
        "name": "mitogen-activated protein kinase kinase 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000353533",
        "curatedRefSeq": "NM_003010.3",
        "geneAliases": [
            "MKK4",
            "SAPKK1",
            "SERK1",
            "MEK4",
            "JNKK",
            "MAPKK4",
            "PRKMK4",
            "SKK1",
            "JNKK1",
            "SAPKK-1",
            "SEK1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 22800,
        "hugoSymbol": "RRAS2",
        "name": "related RAS viral (r-ras) oncogene homolog 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000256196",
        "curatedRefSeq": "NM_012250.5",
        "geneAliases": [
            "TC21"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2321,
        "hugoSymbol": "FLT1",
        "name": "fms related tyrosine kinase 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000282397",
        "curatedRefSeq": "NM_002019.4",
        "geneAliases": [
            "VEGFR1",
            "VEGFR-1",
            "FLT-1",
            "FLT"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2322,
        "hugoSymbol": "FLT3",
        "name": "fms related tyrosine kinase 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000241453",
        "curatedRefSeq": "NM_004119.2",
        "geneAliases": [
            "STK1",
            "FLK-2",
            "CD135",
            "FLK2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5395,
        "hugoSymbol": "PMS2",
        "name": "PMS1 homolog 2, mismatch repair system component",
        "oncogene": false,
        "curatedIsoform": "ENST00000265849",
        "curatedRefSeq": "NM_000535.5",
        "geneAliases": [
            "PMS2CL",
            "HNPCC4",
            "PMSL2",
            "MLH4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2324,
        "hugoSymbol": "FLT4",
        "name": "fms related tyrosine kinase 4",
        "oncogene": true,
        "curatedIsoform": "ENST00000261937",
        "curatedRefSeq": "NM_182925.4",
        "geneAliases": [
            "VEGFR3",
            "FLT41",
            "VEGFR-3",
            "PCL",
            "FLT-4",
            "LMPH1A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6427,
        "hugoSymbol": "SRSF2",
        "name": "serine and arginine rich splicing factor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000359995",
        "curatedRefSeq": "NM_003016.4",
        "geneAliases": [
            "SFRS2A",
            "PR264",
            "SC35",
            "SFRS2",
            "SRp30b",
            "SC-35"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 653604,
        "hugoSymbol": "HIST2H3D",
        "name": "histone cluster 2, H3d",
        "oncogene": false,
        "curatedIsoform": "ENST00000331491",
        "curatedRefSeq": "NM_001123375.2",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 7468,
        "hugoSymbol": "WHSC1",
        "name": "Wolf-Hirschhorn syndrome candidate 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000382891",
        "curatedRefSeq": "NM_001042424.2",
        "geneAliases": [
            "MMSET",
            "WHS",
            "NSD2",
            "TRX5",
            "REIIBP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8493,
        "hugoSymbol": "PPM1D",
        "name": "protein phosphatase, Mg2+/Mn2+ dependent 1D",
        "oncogene": true,
        "curatedIsoform": "ENST00000305921",
        "curatedRefSeq": "NM_003620.3",
        "geneAliases": [
            "PP2C-DELTA",
            "WIP1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5424,
        "hugoSymbol": "POLD1",
        "name": "polymerase (DNA) delta 1, catalytic subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000440232",
        "curatedRefSeq": "NM_002691.3",
        "geneAliases": [
            "POLD",
            "MDPL",
            "CRCS10",
            "CDC2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5426,
        "hugoSymbol": "POLE",
        "name": "polymerase (DNA) epsilon, catalytic subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000320574",
        "curatedRefSeq": "NM_006231.2",
        "geneAliases": [
            "POLE1",
            "CRCS12",
            "FILS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 90417,
        "hugoSymbol": "KNSTRN",
        "name": "kinetochore localized astrin/SPAG5 binding protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000249776",
        "curatedRefSeq": "NM_033286.3",
        "geneAliases": [
            "SKAP",
            "HSD11",
            "TRAF4AF1",
            "C15orf23"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8503,
        "hugoSymbol": "PIK3R3",
        "name": "phosphoinositide-3-kinase regulatory subunit 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000262741",
        "curatedRefSeq": "NM_003629.3",
        "geneAliases": [
            "p55-GAMMA",
            "p55PIK",
            "p55"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 7490,
        "hugoSymbol": "WT1",
        "name": "Wilms tumor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000332351",
        "curatedRefSeq": "NM_024426.4",
        "geneAliases": [
            "EWS-WT1",
            "WT33",
            "GUD",
            "NPHS4",
            "WIT-2",
            "AWT1",
            "WAGR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 324,
        "hugoSymbol": "APC",
        "name": "APC, WNT signaling pathway regulator",
        "oncogene": false,
        "curatedIsoform": "ENST00000257430",
        "curatedRefSeq": "NM_000038.5",
        "geneAliases": [
            "BTPS2",
            "DP3",
            "PPP1R46",
            "DP2",
            "GS",
            "DP2.5"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 3399,
        "hugoSymbol": "ID3",
        "name": "inhibitor of DNA binding 3, HLH protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000374561",
        "curatedRefSeq": "NM_002167.4",
        "geneAliases": [
            "HEIR-1",
            "bHLHb25"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 143686,
        "hugoSymbol": "SESN3",
        "name": "sestrin 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000536441",
        "curatedRefSeq": "NM_144665.3",
        "geneAliases": [
            "SEST3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 253260,
        "hugoSymbol": "RICTOR",
        "name": "RPTOR independent companion of MTOR complex 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000357387",
        "curatedRefSeq": "NM_152756.3",
        "geneAliases": [
            "AVO3",
            "PIA",
            "hAVO3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 330,
        "hugoSymbol": "BIRC3",
        "name": "baculoviral IAP repeat containing 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000263464",
        "curatedRefSeq": "NM_182962.2",
        "geneAliases": [
            "MIHC",
            "HAIP1",
            "API2",
            "AIP1",
            "RNF49",
            "c-IAP2",
            "HIAP1",
            "MALT2",
            "CIAP2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 331,
        "hugoSymbol": "XIAP",
        "name": "X-linked inhibitor of apoptosis",
        "oncogene": false,
        "curatedIsoform": "ENST00000355640",
        "curatedRefSeq": "NM_001167.3",
        "geneAliases": [
            "MIHA",
            "ILP1",
            "API3",
            "BIRC4",
            "hIAP3",
            "IAP-3",
            "hIAP-3",
            "XLP2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 25937,
        "hugoSymbol": "WWTR1",
        "name": "WW domain containing transcription regulator 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000360632",
        "curatedRefSeq": "NM_001168280.1",
        "geneAliases": [
            "TAZ"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4436,
        "hugoSymbol": "MSH2",
        "name": "mutS homolog 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000233146",
        "curatedRefSeq": "NM_000251.2",
        "geneAliases": [
            "LCFS2",
            "HNPCC",
            "COCA1",
            "HNPCC1",
            "FCC1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4437,
        "hugoSymbol": "MSH3",
        "name": "mutS homolog 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000265081",
        "curatedRefSeq": "NM_002439.4",
        "geneAliases": [
            "MRP1",
            "DUP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4440,
        "hugoSymbol": "MSI1",
        "name": "musashi RNA binding protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000257552",
        "curatedRefSeq": "NM_002442.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 3417,
        "hugoSymbol": "IDH1",
        "name": "isocitrate dehydrogenase (NADP(+)) 1, cytosolic",
        "oncogene": true,
        "curatedIsoform": "ENST00000345146",
        "curatedRefSeq": "NM_005896.2",
        "geneAliases": [
            "IDP",
            "HEL-216",
            "IDH",
            "IDPC",
            "IDCD",
            "HEL-S-26",
            "PICD"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3418,
        "hugoSymbol": "IDH2",
        "name": "isocitrate dehydrogenase (NADP(+)) 2, mitochondrial",
        "oncogene": true,
        "curatedIsoform": "ENST00000330062",
        "curatedRefSeq": "NM_002168.2",
        "geneAliases": [
            "IDHM",
            "IDP",
            "D2HGA2",
            "mNADP-IDH",
            "IDPM",
            "IDH",
            "ICD-M"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7514,
        "hugoSymbol": "XPO1",
        "name": "exportin 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000401558",
        "curatedRefSeq": "NM_003400.3",
        "geneAliases": [
            "emb",
            "exp1",
            "CRM1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5468,
        "hugoSymbol": "PPARG",
        "name": "peroxisome proliferator activated receptor gamma",
        "oncogene": false,
        "curatedIsoform": "ENST00000287820",
        "curatedRefSeq": "NM_015869.4",
        "geneAliases": [
            "PPARG1",
            "PPARG2",
            "CIMT1",
            "GLM1",
            "PPARgamma",
            "NR1C3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7516,
        "hugoSymbol": "XRCC2",
        "name": "X-ray repair cross complementing 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000359321",
        "curatedRefSeq": "NM_005431.1",
        "geneAliases": [
            "FANCU"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 7525,
        "hugoSymbol": "YES1",
        "name": "YES proto-oncogene 1, Src family tyrosine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000314574",
        "curatedRefSeq": "NM_005433.3",
        "geneAliases": [
            "HsT441",
            "c-yes",
            "P61-YES",
            "Yes"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 55654,
        "hugoSymbol": "TMEM127",
        "name": "transmembrane protein 127",
        "oncogene": false,
        "curatedIsoform": "ENST00000258439",
        "curatedRefSeq": "NM_001193304.2",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 1387,
        "hugoSymbol": "CREBBP",
        "name": "CREB binding protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000262367",
        "curatedRefSeq": "NM_004380.2",
        "geneAliases": [
            "CBP",
            "KAT3A",
            "RSTS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 22894,
        "hugoSymbol": "DIS3",
        "name": "DIS3 homolog, exosome endoribonuclease and 3'-5' exoribonuclease",
        "oncogene": false,
        "curatedIsoform": "ENST00000377767",
        "curatedRefSeq": "NM_014953.3",
        "geneAliases": [
            "KIAA1008",
            "EXOSC11",
            "2810028N01Rik",
            "dis3p",
            "RRP44"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 367,
        "hugoSymbol": "AR",
        "name": "androgen receptor",
        "oncogene": true,
        "curatedIsoform": "ENST00000374690",
        "curatedRefSeq": "NM_000044.3",
        "geneAliases": [
            "NR3C4",
            "DHTR",
            "HYSP1",
            "SBMA",
            "SMAX1",
            "AR8",
            "KD",
            "TFM",
            "AIS",
            "HUMARA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 369,
        "hugoSymbol": "ARAF",
        "name": "A-Raf proto-oncogene, serine/threonine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000377045",
        "curatedRefSeq": "NM_001654.4",
        "geneAliases": [
            "ARAF1",
            "A-RAF",
            "RAFA1",
            "PKS2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 80243,
        "hugoSymbol": "PREX2",
        "name": "phosphatidylinositol-3,4,5-trisphosphate dependent Rac exchange factor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000288368",
        "curatedRefSeq": "NM_024870.2",
        "geneAliases": [
            "PPP1R129",
            "DEP.2",
            "P-REX2",
            "DEPDC2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1399,
        "hugoSymbol": "CRKL",
        "name": "CRK like proto-oncogene, adaptor protein",
        "oncogene": true,
        "curatedIsoform": "ENST00000354336",
        "curatedRefSeq": "NM_005207.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 387,
        "hugoSymbol": "RHOA",
        "name": "ras homolog family member A",
        "oncogene": true,
        "curatedIsoform": "ENST00000418115",
        "curatedRefSeq": "NM_001664.2",
        "geneAliases": [
            "ARH12",
            "ARHA",
            "RHOH12",
            "RHO12"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3459,
        "hugoSymbol": "IFNGR1",
        "name": "interferon gamma receptor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000367739",
        "curatedRefSeq": "NM_000416.2",
        "geneAliases": [
            "IMD27A",
            "IMD27B",
            "CD119",
            "IFNGR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4485,
        "hugoSymbol": "MST1",
        "name": "macrophage stimulating 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000449682",
        "curatedRefSeq": "NM_020998.3",
        "geneAliases": [
            "NF15S2",
            "HGFL",
            "D3F15S2",
            "MSP",
            "DNF15S2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4486,
        "hugoSymbol": "MST1R",
        "name": "macrophage stimulating 1 receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000296474",
        "curatedRefSeq": "NM_002447.2",
        "geneAliases": [
            "RON",
            "PTK8",
            "CDw136",
            "CD136"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9611,
        "hugoSymbol": "NCOR1",
        "name": "nuclear receptor corepressor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000268712",
        "curatedRefSeq": "NM_006311.3",
        "geneAliases": [
            "TRAC1",
            "PPP1R109",
            "N-CoR",
            "hN-CoR",
            "N-CoR1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5518,
        "hugoSymbol": "PPP2R1A",
        "name": "protein phosphatase 2 scaffold subunit Aalpha",
        "oncogene": false,
        "curatedIsoform": "ENST00000322088",
        "curatedRefSeq": "NM_014225.5",
        "geneAliases": [
            "MRD36",
            "PP2AAALPHA",
            "PP2A-Aalpha",
            "PR65A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 29072,
        "hugoSymbol": "SETD2",
        "name": "SET domain containing 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000409792",
        "curatedRefSeq": "NM_014159.6",
        "geneAliases": [
            "HIF-1",
            "HYPB",
            "LLS",
            "p231HBP",
            "KMT3A",
            "SET2",
            "HIP-1",
            "HSPC069",
            "HBP231"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 3479,
        "hugoSymbol": "IGF1",
        "name": "insulin like growth factor 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000307046",
        "curatedRefSeq": "NM_001111285.1",
        "geneAliases": [
            "IGF-I",
            "IGFI",
            "MGF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3480,
        "hugoSymbol": "IGF1R",
        "name": "insulin like growth factor 1 receptor",
        "oncogene": true,
        "curatedIsoform": "ENST00000268035",
        "curatedRefSeq": "NM_000875.3",
        "geneAliases": [
            "IGFIR",
            "IGFR",
            "JTK13",
            "CD221"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3481,
        "hugoSymbol": "IGF2",
        "name": "insulin like growth factor 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000434045",
        "curatedRefSeq": "NM_001127598.1",
        "geneAliases": [
            "C11orf43",
            "PP9974",
            "GRDF",
            "IGF-II"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1436,
        "hugoSymbol": "CSF1R",
        "name": "colony stimulating factor 1 receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000286301",
        "curatedRefSeq": "NM_005211.3",
        "geneAliases": [
            "HDLS",
            "CSFR",
            "C-FMS",
            "FIM2",
            "CD115",
            "M-CSF-R",
            "FMS",
            "CSF-1R"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 29086,
        "hugoSymbol": "BABAM1",
        "name": "BRISC and BRCA1 A complex member 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000359435",
        "curatedRefSeq": "NM_001033549.1",
        "geneAliases": [
            "NBA1",
            "C19orf62",
            "MERIT40",
            "HSPC142"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1441,
        "hugoSymbol": "CSF3R",
        "name": "colony stimulating factor 3 receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000361632",
        "curatedRefSeq": "NM_000760.3",
        "geneAliases": [
            "GCSFR",
            "CD114"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5537,
        "hugoSymbol": "PPP6C",
        "name": "protein phosphatase 6 catalytic subunit",
        "oncogene": true,
        "curatedIsoform": "ENST00000373547",
        "curatedRefSeq": "NM_002721.4",
        "geneAliases": [
            "PP6",
            "PP6C"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10664,
        "hugoSymbol": "CTCF",
        "name": "CCCTC-binding factor",
        "oncogene": false,
        "curatedIsoform": "ENST00000264010",
        "curatedRefSeq": "NM_006565.3",
        "geneAliases": [
            "MRD21"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 9641,
        "hugoSymbol": "IKBKE",
        "name": "inhibitor of kappa light polypeptide gene enhancer in B-cells, kinase epsilon",
        "oncogene": false,
        "curatedIsoform": "ENST00000367120",
        "curatedRefSeq": "NM_014002.3",
        "geneAliases": [
            "IKK-i",
            "IKKI",
            "IKK-E",
            "IKKE"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2475,
        "hugoSymbol": "MTOR",
        "name": "mechanistic target of rapamycin",
        "oncogene": true,
        "curatedIsoform": "ENST00000361445",
        "curatedRefSeq": "NM_004958.3",
        "geneAliases": [
            "FRAP1",
            "RAFT1",
            "FRAP2",
            "FRAP",
            "SKS",
            "RAPT1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 29102,
        "hugoSymbol": "DROSHA",
        "name": "drosha ribonuclease III",
        "oncogene": false,
        "curatedIsoform": "ENST00000344624",
        "curatedRefSeq": "NM_013235.4",
        "geneAliases": [
            "RNASEN",
            "RANSE3L",
            "ETOHI2",
            "HSA242976",
            "RNASE3L",
            "RN3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 151987,
        "hugoSymbol": "PPP4R2",
        "name": "protein phosphatase 4 regulatory subunit 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000356692",
        "curatedRefSeq": "NM_174907.2",
        "geneAliases": [
            "PP4R2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8626,
        "hugoSymbol": "TP63",
        "name": "tumor protein p63",
        "oncogene": false,
        "curatedIsoform": "ENST00000264731",
        "curatedRefSeq": "NM_003722.4",
        "geneAliases": [
            "OFC8",
            "AIS",
            "SHFM4",
            "p63",
            "B(p51B)",
            "p40",
            "p51",
            "B(p51A)",
            "p73H",
            "EEC3",
            "TP53CP",
            "TP73L",
            "LMS",
            "p73L",
            "TP53L",
            "p53CP",
            "KET",
            "RHS",
            "NBP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 80312,
        "hugoSymbol": "TET1",
        "name": "tet methylcytosine dioxygenase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000373644",
        "curatedRefSeq": "NM_030625.2",
        "geneAliases": [
            "LCX",
            "TET1-MLL",
            "MLL-TET1",
            "CXXC6",
            "bA119F7.1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9656,
        "hugoSymbol": "MDC1",
        "name": "mediator of DNA damage checkpoint 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000376406",
        "curatedRefSeq": "NM_014641.2",
        "geneAliases": [
            "NFBD1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 29123,
        "hugoSymbol": "ANKRD11",
        "name": "ankyrin repeat domain 11",
        "oncogene": false,
        "curatedIsoform": "ENST00000301030",
        "curatedRefSeq": "NM_013275.5",
        "geneAliases": [
            "ANCO1",
            "LZ16",
            "T13",
            "ANCO-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5573,
        "hugoSymbol": "PRKAR1A",
        "name": "protein kinase cAMP-dependent type I regulatory subunit alpha",
        "oncogene": false,
        "curatedIsoform": "ENST00000358598",
        "curatedRefSeq": "NM_212471.2",
        "geneAliases": [
            "ADOHR",
            "CAR",
            "CNC1",
            "CNC",
            "TSE1",
            "PRKAR1",
            "ACRDYS1",
            "PKR1",
            "PPNAD1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6597,
        "hugoSymbol": "SMARCA4",
        "name": "SWI/SNF related, matrix associated, actin dependent regulator of chromatin, subfamily a, member 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000344626",
        "curatedRefSeq": "NM_003072.3",
        "geneAliases": [
            "SNF2LB",
            "SNF2",
            "SNF2L4",
            "BAF190",
            "BRG1",
            "BAF190A",
            "MRD16",
            "RTPS2",
            "SWI2",
            "hSNF2b",
            "CSS4"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 6598,
        "hugoSymbol": "SMARCB1",
        "name": "SWI/SNF related, matrix associated, actin dependent regulator of chromatin, subfamily b, member 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000263121",
        "curatedRefSeq": "NM_003073.3",
        "geneAliases": [
            "MRD15",
            "SNF5L1",
            "RDT",
            "RTPS1",
            "BAF47",
            "PPP1R144",
            "SNF5",
            "CSS3",
            "INI1",
            "hSNFS",
            "Sfh1p",
            "SWNTS1",
            "Snr1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 29126,
        "hugoSymbol": "CD274",
        "name": "CD274 molecule",
        "oncogene": false,
        "curatedIsoform": "ENST00000381577",
        "curatedRefSeq": "NM_014143.3",
        "geneAliases": [
            "B7H1",
            "PD-L1",
            "PDCD1L1",
            "PDCD1LG1",
            "PDL1",
            "B7-H"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6602,
        "hugoSymbol": "SMARCD1",
        "name": "SWI/SNF related, matrix associated, actin dependent regulator of chromatin, subfamily d, member 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000394963",
        "curatedRefSeq": "NM_003076.4",
        "geneAliases": [
            "BAF60A",
            "Rsc6p",
            "CRACD1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 201163,
        "hugoSymbol": "FLCN",
        "name": "folliculin",
        "oncogene": false,
        "curatedIsoform": "ENST00000285071",
        "curatedRefSeq": "NM_144997.5",
        "geneAliases": [
            "BHD",
            "FLCL"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8651,
        "hugoSymbol": "SOCS1",
        "name": "suppressor of cytokine signaling 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000332029",
        "curatedRefSeq": "NM_003745.1",
        "geneAliases": [
            "CISH1",
            "SSI-1",
            "JAB",
            "CIS1",
            "SOCS-1",
            "SSI1",
            "TIP3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 27086,
        "hugoSymbol": "FOXP1",
        "name": "forkhead box P1",
        "oncogene": false,
        "curatedIsoform": "ENST00000318789",
        "curatedRefSeq": "NM_001244814.1",
        "geneAliases": [
            "HSPC215",
            "12CC4",
            "hFKH1B",
            "QRF1",
            "MFH"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 463,
        "hugoSymbol": "ZFHX3",
        "name": "zinc finger homeobox 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000268489",
        "curatedRefSeq": "NM_006885.3",
        "geneAliases": [
            "ATBF1",
            "ZNF927",
            "ATBT"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5584,
        "hugoSymbol": "PRKCI",
        "name": "protein kinase C iota",
        "oncogene": true,
        "curatedIsoform": "ENST00000295797",
        "curatedRefSeq": "NM_002740.5",
        "geneAliases": [
            "DXS1179E",
            "PKCI",
            "nPKC-iota"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6608,
        "hugoSymbol": "SMO",
        "name": "smoothened, frizzled class receptor",
        "oncogene": true,
        "curatedIsoform": "ENST00000249373",
        "curatedRefSeq": "NM_005631.4",
        "geneAliases": [
            "Gx",
            "FZD11",
            "SMOH"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 84433,
        "hugoSymbol": "CARD11",
        "name": "caspase recruitment domain family member 11",
        "oncogene": false,
        "curatedIsoform": "ENST00000396946",
        "curatedRefSeq": "NM_032415.4",
        "geneAliases": [
            "CARMA1",
            "IMD11",
            "BENTA",
            "BIMP3",
            "PPBL"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5587,
        "hugoSymbol": "PRKD1",
        "name": "protein kinase D1",
        "oncogene": false,
        "curatedIsoform": "ENST00000331968",
        "curatedRefSeq": "NM_002742.2",
        "geneAliases": [
            "PKCM",
            "PKD",
            "PKC-MU",
            "PRKCM"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 100271849,
        "hugoSymbol": "MEF2B",
        "name": "myocyte enhancer factor 2B",
        "oncogene": true,
        "curatedIsoform": "ENST00000162023",
        "curatedRefSeq": "NM_001145785.1",
        "geneAliases": [
            "RSRFR2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8660,
        "hugoSymbol": "IRS2",
        "name": "insulin receptor substrate 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000375856",
        "curatedRefSeq": "NM_003749.2",
        "geneAliases": [
            "IRS-2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1493,
        "hugoSymbol": "CTLA4",
        "name": "cytotoxic T-lymphocyte associated protein 4",
        "oncogene": true,
        "curatedIsoform": "ENST00000302823",
        "curatedRefSeq": "NM_005214.4",
        "geneAliases": [
            "ALPS5",
            "CD",
            "CD152",
            "CELIAC3",
            "IDDM12",
            "GSE",
            "CTLA-4",
            "GRD4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 472,
        "hugoSymbol": "ATM",
        "name": "ATM serine/threonine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000278616",
        "curatedRefSeq": "NM_000051.3",
        "geneAliases": [
            "ATC",
            "ATD",
            "TEL1",
            "ATE",
            "ATDC",
            "TELO1",
            "AT1",
            "ATA"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 9688,
        "hugoSymbol": "NUP93",
        "name": "nucleoporin 93",
        "oncogene": false,
        "curatedIsoform": "ENST00000308159",
        "curatedRefSeq": "NM_014669.4",
        "geneAliases": [
            "NIC96",
            "NPHS12"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5594,
        "hugoSymbol": "MAPK1",
        "name": "mitogen-activated protein kinase 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000215832",
        "curatedRefSeq": "NM_002745.4",
        "geneAliases": [
            "PRKM1",
            "PRKM2",
            "p41mapk",
            "ERT1",
            "p41",
            "p40",
            "P42MAPK",
            "ERK-2",
            "ERK2",
            "p38",
            "p42-MAPK",
            "MAPK2",
            "ERK"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1499,
        "hugoSymbol": "CTNNB1",
        "name": "catenin beta 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000349496",
        "curatedRefSeq": "NM_001904.3",
        "geneAliases": [
            "MRD19",
            "CTNNB",
            "armadillo"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5595,
        "hugoSymbol": "MAPK3",
        "name": "mitogen-activated protein kinase 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000263025",
        "curatedRefSeq": "NM_002746.2",
        "geneAliases": [
            "ERK-1",
            "P44MAPK",
            "PRKM3",
            "ERK1",
            "HUMKER1A",
            "HS44KDAP",
            "P44ERK1",
            "ERT2",
            "p44-MAPK",
            "p44-ERK1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 84444,
        "hugoSymbol": "DOT1L",
        "name": "DOT1 like histone lysine methyltransferase",
        "oncogene": false,
        "curatedIsoform": "ENST00000398665",
        "curatedRefSeq": "NM_032482.2",
        "geneAliases": [
            "KMT4",
            "DOT1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5604,
        "hugoSymbol": "MAP2K1",
        "name": "mitogen-activated protein kinase kinase 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000307102",
        "curatedRefSeq": "NM_002755.3",
        "geneAliases": [
            "MKK1",
            "PRKMK1",
            "MEK1",
            "MAPKK1",
            "CFC3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 51684,
        "hugoSymbol": "SUFU",
        "name": "SUFU negative regulator of hedgehog signaling",
        "oncogene": false,
        "curatedIsoform": "ENST00000369902",
        "curatedRefSeq": "NM_016169.3",
        "geneAliases": [
            "SUFUXL",
            "PRO1280",
            "SUFUH"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5605,
        "hugoSymbol": "MAP2K2",
        "name": "mitogen-activated protein kinase kinase 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000262948",
        "curatedRefSeq": "NM_030662.3",
        "geneAliases": [
            "MKK2",
            "PRKMK2",
            "MAPKK2",
            "CFC4",
            "MEK2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 23013,
        "hugoSymbol": "SPEN",
        "name": "spen family transcriptional repressor",
        "oncogene": false,
        "curatedIsoform": "ENST00000375759",
        "curatedRefSeq": "NM_015001.2",
        "geneAliases": [
            "HIAA0929",
            "RBM15C",
            "MINT",
            "SHARP"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 2534,
        "hugoSymbol": "FYN",
        "name": "FYN proto-oncogene, Src family tyrosine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000368678",
        "curatedRefSeq": "NM_153047.3",
        "geneAliases": [
            "p59-FYN",
            "SLK",
            "SYN"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 27113,
        "hugoSymbol": "BBC3",
        "name": "BCL2 binding component 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000449228",
        "curatedRefSeq": "NM_001127240.2",
        "geneAliases": [
            "JFY-1",
            "JFY1",
            "PUMA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 63978,
        "hugoSymbol": "PRDM14",
        "name": "PR domain 14",
        "oncogene": false,
        "curatedIsoform": "ENST00000276594",
        "curatedRefSeq": "NM_024504.3",
        "geneAliases": [
            "PFM11"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10735,
        "hugoSymbol": "STAG2",
        "name": "stromal antigen 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000218089",
        "curatedRefSeq": "NM_001042749.1",
        "geneAliases": [
            "SCC3B",
            "bA517O1.1",
            "SA-2",
            "SA2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 84464,
        "hugoSymbol": "SLX4",
        "name": "SLX4 structure-specific endonuclease subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000294008",
        "curatedRefSeq": "NM_032444.2",
        "geneAliases": [
            "MUS312",
            "FANCP",
            "BTBD12"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4595,
        "hugoSymbol": "MUTYH",
        "name": "mutY DNA glycosylase",
        "oncogene": false,
        "curatedIsoform": "ENST00000372115",
        "curatedRefSeq": "NM_001048171.1",
        "geneAliases": [
            "MYH"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3575,
        "hugoSymbol": "IL7R",
        "name": "interleukin 7 receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000303115",
        "curatedRefSeq": "NM_002185.3",
        "geneAliases": [
            "ILRA",
            "IL-7R-alpha",
            "CD127",
            "CDW127",
            "IL7RA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 80380,
        "hugoSymbol": "PDCD1LG2",
        "name": "programmed cell death 1 ligand 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000397747",
        "curatedRefSeq": "NM_025239.3",
        "geneAliases": [
            "CD273",
            "bA574F11.2",
            "PD-L2",
            "PDCD1L2",
            "B7DC",
            "Btdc",
            "PDL2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6654,
        "hugoSymbol": "SOS1",
        "name": "SOS Ras/Rac guanine nucleotide exchange factor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000402219",
        "curatedRefSeq": "NM_005633.3",
        "geneAliases": [
            "GINGF",
            "GF1",
            "HGF",
            "GGF1",
            "NS4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 80381,
        "hugoSymbol": "CD276",
        "name": "CD276 molecule",
        "oncogene": false,
        "curatedIsoform": "ENST00000318443",
        "curatedRefSeq": "NM_001024736.1",
        "geneAliases": [
            "B7RP-2",
            "B7-H3",
            "4Ig-B7-H3",
            "B7H3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4609,
        "hugoSymbol": "MYC",
        "name": "v-myc avian myelocytomatosis viral oncogene homolog",
        "oncogene": true,
        "curatedIsoform": "ENST00000377970",
        "curatedRefSeq": "NM_002467.4",
        "geneAliases": [
            "c-Myc",
            "MYCC",
            "MRTL",
            "bHLHe39"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6657,
        "hugoSymbol": "SOX2",
        "name": "SRY-box 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000325404",
        "curatedRefSeq": "NM_003106.3",
        "geneAliases": [
            "ANOP3",
            "MCOPS3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3586,
        "hugoSymbol": "IL10",
        "name": "interleukin 10",
        "oncogene": false,
        "curatedIsoform": "ENST00000423557",
        "curatedRefSeq": "NM_000572.2",
        "geneAliases": [
            "CSIF",
            "TGIF",
            "GVHDS",
            "IL10A",
            "IL-10"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4610,
        "hugoSymbol": "MYCL",
        "name": "v-myc avian myelocytomatosis viral oncogene lung carcinoma derived homolog",
        "oncogene": false,
        "curatedIsoform": "ENST00000397332",
        "curatedRefSeq": "NM_001033082.2",
        "geneAliases": [
            "L-Myc",
            "LMYC",
            "bHLHe38",
            "MYCL1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1540,
        "hugoSymbol": "CYLD",
        "name": "CYLD lysine 63 deubiquitinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000398568",
        "curatedRefSeq": "NM_001042355.1",
        "geneAliases": [
            "CYLDI",
            "MFT1",
            "SBS",
            "EAC",
            "CDMT",
            "CYLD1",
            "MFT",
            "USPL2",
            "TEM",
            "BRSS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4613,
        "hugoSymbol": "MYCN",
        "name": "v-myc avian myelocytomatosis viral oncogene neuroblastoma derived homolog",
        "oncogene": true,
        "curatedIsoform": "ENST00000281043",
        "curatedRefSeq": "NM_005378.4",
        "geneAliases": [
            "ODED",
            "MODED",
            "bHLHe37",
            "N-myc",
            "NMYC"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6662,
        "hugoSymbol": "SOX9",
        "name": "SRY-box 9",
        "oncogene": false,
        "curatedIsoform": "ENST00000245479",
        "curatedRefSeq": "NM_000346.3",
        "geneAliases": [
            "SRXY10",
            "CMPD1",
            "CMD1",
            "SRA1",
            "SRXX2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 54790,
        "hugoSymbol": "TET2",
        "name": "tet methylcytosine dioxygenase 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000380013",
        "curatedRefSeq": "NM_001127208.2",
        "geneAliases": [
            "KIAA1546",
            "MDS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4615,
        "hugoSymbol": "MYD88",
        "name": "myeloid differentiation primary response 88",
        "oncogene": true,
        "curatedIsoform": "ENST00000396334",
        "curatedRefSeq": "NM_002468.4",
        "geneAliases": [
            "MYD88D"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5644,
        "hugoSymbol": "PRSS1",
        "name": "protease, serine 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000311737",
        "curatedRefSeq": "NM_002769.4",
        "geneAliases": [
            "TRY1",
            "TRP1",
            "TRYP1",
            "TRY4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10769,
        "hugoSymbol": "PLK2",
        "name": "polo like kinase 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000274289",
        "curatedRefSeq": "NM_006622.3",
        "geneAliases": [
            "SNK",
            "hPlk2",
            "hSNK"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8726,
        "hugoSymbol": "EED",
        "name": "embryonic ectoderm development",
        "oncogene": false,
        "curatedIsoform": "ENST00000263360",
        "curatedRefSeq": "NM_003797.3",
        "geneAliases": [
            "WAIT1",
            "HEED"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 27161,
        "hugoSymbol": "AGO2",
        "name": "argonaute 2, RISC catalytic component",
        "oncogene": false,
        "curatedIsoform": "ENST00000220592",
        "curatedRefSeq": "NM_012154.3",
        "geneAliases": [
            "Q10",
            "EIF2C2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9757,
        "hugoSymbol": "KMT2B",
        "name": "lysine methyltransferase 2B",
        "oncogene": false,
        "curatedIsoform": "ENST00000222270",
        "curatedRefSeq": "NM_014727.1",
        "geneAliases": [
            "MLL4",
            "HRX2",
            "WBP-7",
            "CXXC10",
            "WBP7",
            "MLL1B",
            "TRX2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 545,
        "hugoSymbol": "ATR",
        "name": "ATR serine/threonine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000350721",
        "curatedRefSeq": "NM_001184.3",
        "geneAliases": [
            "SCKL1",
            "MEC1",
            "SCKL",
            "FRP1",
            "FCTCS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 546,
        "hugoSymbol": "ATRX",
        "name": "ATRX, chromatin remodeler",
        "oncogene": false,
        "curatedIsoform": "ENST00000373344",
        "curatedRefSeq": "NM_000489.3",
        "geneAliases": [
            "JMS",
            "MRXHF1",
            "SFM1",
            "MRX52",
            "XH2",
            "ZNF-HX",
            "RAD54",
            "RAD54L",
            "XNP",
            "ATR2",
            "SHS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 51750,
        "hugoSymbol": "RTEL1",
        "name": "regulator of telomere elongation helicase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000508582",
        "curatedRefSeq": "NM_032957.4",
        "geneAliases": [
            "NHL",
            "DKCA4",
            "DKCB5",
            "C20orf41",
            "PFBMFT3",
            "RTEL"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3623,
        "hugoSymbol": "INHA",
        "name": "inhibin alpha subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000243786",
        "curatedRefSeq": "NM_002191.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 3624,
        "hugoSymbol": "INHBA",
        "name": "inhibin beta A subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000242208",
        "curatedRefSeq": "NM_002192.2",
        "geneAliases": [
            "FRP",
            "EDF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 51755,
        "hugoSymbol": "CDK12",
        "name": "cyclin dependent kinase 12",
        "oncogene": false,
        "curatedIsoform": "ENST00000447079",
        "curatedRefSeq": "NM_016507.2",
        "geneAliases": [
            "CRK7",
            "CRKR",
            "CRKRS"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 558,
        "hugoSymbol": "AXL",
        "name": "AXL receptor tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000301178",
        "curatedRefSeq": "NM_021913.4",
        "geneAliases": [
            "ARK",
            "JTK11",
            "Tyro7",
            "UFO"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4654,
        "hugoSymbol": "MYOD1",
        "name": "myogenic differentiation 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000250003",
        "curatedRefSeq": "NM_002478.4",
        "geneAliases": [
            "MYOD",
            "bHLHc1",
            "PUM",
            "MYF3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3631,
        "hugoSymbol": "INPP4A",
        "name": "inositol polyphosphate-4-phosphatase type I A",
        "oncogene": false,
        "curatedIsoform": "ENST00000074304",
        "curatedRefSeq": "NM_001134224.1",
        "geneAliases": [
            "INPP4",
            "TVAS1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3636,
        "hugoSymbol": "INPPL1",
        "name": "inositol polyphosphate phosphatase like 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000298229",
        "curatedRefSeq": "NM_001567.3",
        "geneAliases": [
            "SHIP2",
            "OPSMD"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 567,
        "hugoSymbol": "B2M",
        "name": "beta-2-microglobulin",
        "oncogene": false,
        "curatedIsoform": "ENST00000558401",
        "curatedRefSeq": "NM_004048.2",
        "geneAliases": [
            "IMD43"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 6714,
        "hugoSymbol": "SRC",
        "name": "SRC proto-oncogene, non-receptor tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000358208",
        "curatedRefSeq": "NM_198291.2",
        "geneAliases": [
            "THC6",
            "c-SRC",
            "ASV",
            "p60-Src",
            "SRC1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3643,
        "hugoSymbol": "INSR",
        "name": "insulin receptor",
        "oncogene": false,
        "curatedIsoform": "ENST00000302850",
        "curatedRefSeq": "NM_000208.2",
        "geneAliases": [
            "CD220",
            "HHF5"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8764,
        "hugoSymbol": "TNFRSF14",
        "name": "tumor necrosis factor receptor superfamily member 14",
        "oncogene": false,
        "curatedIsoform": "ENST00000355716",
        "curatedRefSeq": "NM_003820.2",
        "geneAliases": [
            "HVEM",
            "CD270",
            "TR2",
            "HVEA",
            "ATAR",
            "LIGHTR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2623,
        "hugoSymbol": "GATA1",
        "name": "GATA binding protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000376670",
        "curatedRefSeq": "NM_002049.3",
        "geneAliases": [
            "NFE1",
            "GF-1",
            "GF1",
            "XLANP",
            "ERYF1",
            "XLTDA",
            "GATA-1",
            "NF-E1",
            "XLTT"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2624,
        "hugoSymbol": "GATA2",
        "name": "GATA binding protein 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000341105",
        "curatedRefSeq": "NM_032638.4",
        "geneAliases": [
            "DCML",
            "MONOMAC",
            "NFE1B",
            "IMD21"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2625,
        "hugoSymbol": "GATA3",
        "name": "GATA binding protein 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000346208",
        "curatedRefSeq": "NM_002051.2",
        "geneAliases": [
            "HDR",
            "HDRS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 580,
        "hugoSymbol": "BARD1",
        "name": "BRCA1 associated RING domain 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000260947",
        "curatedRefSeq": "NM_000465.2",
        "geneAliases": [],
        "tsg": true
    },
    {
        "entrezGeneId": 54855,
        "hugoSymbol": "FAM46C",
        "name": "family with sequence similarity 46 member C",
        "oncogene": false,
        "curatedIsoform": "ENST00000369448",
        "curatedRefSeq": "NM_017709.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 4683,
        "hugoSymbol": "NBN",
        "name": "nibrin",
        "oncogene": false,
        "curatedIsoform": "ENST00000265433",
        "curatedRefSeq": "NM_002485.4",
        "geneAliases": [
            "ATV",
            "NBS1",
            "AT-V2",
            "P95",
            "NBS",
            "AT-V1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3662,
        "hugoSymbol": "IRF4",
        "name": "interferon regulatory factor 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000380956",
        "curatedRefSeq": "NM_002460.3",
        "geneAliases": [
            "NF-EM5",
            "LSIRF",
            "MUM1",
            "SHEP8"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1616,
        "hugoSymbol": "DAXX",
        "name": "death-domain associated protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000374542",
        "curatedRefSeq": "NM_001141970.1",
        "geneAliases": [
            "BING2",
            "DAP6",
            "EAP1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 595,
        "hugoSymbol": "CCND1",
        "name": "cyclin D1",
        "oncogene": true,
        "curatedIsoform": "ENST00000227507",
        "curatedRefSeq": "NM_053056.2",
        "geneAliases": [
            "PRAD1",
            "D11S287E",
            "BCL1",
            "U21B31"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3667,
        "hugoSymbol": "IRS1",
        "name": "insulin receptor substrate 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000305123",
        "curatedRefSeq": "NM_005544.2",
        "geneAliases": [
            "HIRS-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 83540,
        "hugoSymbol": "NUF2",
        "name": "NUF2, NDC80 kinetochore complex component",
        "oncogene": false,
        "curatedIsoform": "ENST00000271452",
        "curatedRefSeq": "NM_031423.3",
        "geneAliases": [
            "CT106",
            "CDCA1",
            "NUF2R"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 596,
        "hugoSymbol": "BCL2",
        "name": "BCL2, apoptosis regulator",
        "oncogene": true,
        "curatedIsoform": "ENST00000333681",
        "curatedRefSeq": "NM_000633.2",
        "geneAliases": [
            "Bcl-2",
            "PPP1R50"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 598,
        "hugoSymbol": "BCL2L1",
        "name": "BCL2 like 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000307677",
        "curatedRefSeq": "NM_138578.1",
        "geneAliases": [
            "BCLX",
            "BCL2L",
            "Bcl-X",
            "BCL-XL/S",
            "PPP1R52"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9817,
        "hugoSymbol": "KEAP1",
        "name": "kelch like ECH associated protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000171111",
        "curatedRefSeq": "NM_203500.1",
        "geneAliases": [
            "INrf2",
            "KLHL19"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 604,
        "hugoSymbol": "BCL6",
        "name": "B-cell CLL/lymphoma 6",
        "oncogene": true,
        "curatedIsoform": "ENST00000232014",
        "curatedRefSeq": "NM_001706.4",
        "geneAliases": [
            "BCL5",
            "ZBTB27",
            "ZNF51",
            "BCL6A",
            "LAZ3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 440926,
        "hugoSymbol": "H3F3AP4",
        "name": "H3 histone, family 3A, pseudogene 4",
        "oncogene": false,
        "curatedIsoform": null,
        "curatedRefSeq": null,
        "geneAliases": [
            "p13"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5727,
        "hugoSymbol": "PTCH1",
        "name": "patched 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000331920",
        "curatedRefSeq": "NM_000264.3",
        "geneAliases": [
            "NBCCS",
            "PTC1",
            "BCNS",
            "HPE7",
            "PTCH11",
            "PTCH",
            "PTC"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5728,
        "hugoSymbol": "PTEN",
        "name": "phosphatase and tensin homolog",
        "oncogene": false,
        "curatedIsoform": "ENST00000371953",
        "curatedRefSeq": "NM_000314.4",
        "geneAliases": [
            "DEC",
            "MHAM",
            "TEP1",
            "10q23del",
            "BZS",
            "PTEN1",
            "GLM2",
            "CWS1",
            "MMAC1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 54880,
        "hugoSymbol": "BCOR",
        "name": "BCL6 corepressor",
        "oncogene": false,
        "curatedIsoform": "ENST00000378444",
        "curatedRefSeq": "NM_001123385.1",
        "geneAliases": [
            "MAA2",
            "ANOP2",
            "MCOPS2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 27244,
        "hugoSymbol": "SESN1",
        "name": "sestrin 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000436639",
        "curatedRefSeq": "NM_014454.2",
        "geneAliases": [
            "PA26",
            "SEST1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 64109,
        "hugoSymbol": "CRLF2",
        "name": "cytokine receptor-like factor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000381566",
        "curatedRefSeq": "NM_022148.2",
        "geneAliases": [
            "TSLPR",
            "CRL2",
            "CRLF2Y"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 54894,
        "hugoSymbol": "RNF43",
        "name": "ring finger protein 43",
        "oncogene": false,
        "curatedIsoform": "ENST00000407977",
        "curatedRefSeq": "NM_017763.4",
        "geneAliases": [
            "RNF124",
            "URCC"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 23152,
        "hugoSymbol": "CIC",
        "name": "capicua transcriptional repressor",
        "oncogene": false,
        "curatedIsoform": "ENST00000575354",
        "curatedRefSeq": "NM_015125.3",
        "geneAliases": [],
        "tsg": true
    },
    {
        "entrezGeneId": 8821,
        "hugoSymbol": "INPP4B",
        "name": "inositol polyphosphate-4-phosphatase type II B",
        "oncogene": false,
        "curatedIsoform": "ENST00000262992",
        "curatedRefSeq": "NM_001101669.1",
        "geneAliases": [],
        "tsg": true
    },
    {
        "entrezGeneId": 6774,
        "hugoSymbol": "STAT3",
        "name": "signal transducer and activator of transcription 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000264657",
        "curatedRefSeq": "NM_139276.2",
        "geneAliases": [
            "ADMIO",
            "APRF",
            "HIES"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6776,
        "hugoSymbol": "STAT5A",
        "name": "signal transducer and activator of transcription 5A",
        "oncogene": false,
        "curatedIsoform": "ENST00000345506",
        "curatedRefSeq": "NM_003152.3",
        "geneAliases": [
            "STAT5",
            "MGF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 54904,
        "hugoSymbol": "WHSC1L1",
        "name": "Wolf-Hirschhorn syndrome candidate 1-like 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000317025",
        "curatedRefSeq": "NM_023034.1",
        "geneAliases": [
            "NSD3",
            "WHISTLE",
            "pp14328"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6777,
        "hugoSymbol": "STAT5B",
        "name": "signal transducer and activator of transcription 5B",
        "oncogene": false,
        "curatedIsoform": "ENST00000293328",
        "curatedRefSeq": "NM_012448.3",
        "geneAliases": [
            "STAT5"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 64121,
        "hugoSymbol": "RRAGC",
        "name": "Ras related GTP binding C",
        "oncogene": false,
        "curatedIsoform": "ENST00000373001",
        "curatedRefSeq": "NM_022157.3",
        "geneAliases": [
            "TIB929",
            "GTR2",
            "RAGC"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7803,
        "hugoSymbol": "PTP4A1",
        "name": "protein tyrosine phosphatase type IVA, member 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000370651",
        "curatedRefSeq": "NM_003463.4",
        "geneAliases": [
            "PRL1",
            "PRL-1",
            "HH72",
            "PTPCAAX1",
            "PTP(CAAX1)"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 124540,
        "hugoSymbol": "MSI2",
        "name": "musashi RNA binding protein 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000284073",
        "curatedRefSeq": "NM_138962.2",
        "geneAliases": [
            "MSI2H"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 639,
        "hugoSymbol": "PRDM1",
        "name": "PR domain 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000369096",
        "curatedRefSeq": "NM_001198.3",
        "geneAliases": [
            "PRDI-BF1",
            "BLIMP1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 641,
        "hugoSymbol": "BLM",
        "name": "Bloom syndrome RecQ like helicase",
        "oncogene": false,
        "curatedIsoform": "ENST00000355112",
        "curatedRefSeq": "NM_000057.2",
        "geneAliases": [
            "BS",
            "RECQL3",
            "RECQ2",
            "RECQL2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3716,
        "hugoSymbol": "JAK1",
        "name": "Janus kinase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000342505",
        "curatedRefSeq": "NM_002227.2",
        "geneAliases": [
            "JTK3",
            "JAK1B",
            "JAK1A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7812,
        "hugoSymbol": "CSDE1",
        "name": "cold shock domain containing E1",
        "oncogene": false,
        "curatedIsoform": "ENST00000438362",
        "curatedRefSeq": "NM_001242891.1",
        "geneAliases": [
            "D1S155E",
            "UNR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3717,
        "hugoSymbol": "JAK2",
        "name": "Janus kinase 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000381652",
        "curatedRefSeq": "NM_004972.3",
        "geneAliases": [
            "THCYT3",
            "JTK10"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3718,
        "hugoSymbol": "JAK3",
        "name": "Janus kinase 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000458235",
        "curatedRefSeq": "NM_000215.3",
        "geneAliases": [
            "JAK3_HUMAN",
            "L-JAK",
            "JAKL",
            "JAK-3",
            "LJAK"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6790,
        "hugoSymbol": "AURKA",
        "name": "aurora kinase A",
        "oncogene": true,
        "curatedIsoform": "ENST00000312783",
        "curatedRefSeq": "NM_003600.2",
        "geneAliases": [
            "PPP1R47",
            "AIK",
            "BTAK",
            "STK15",
            "ARK1",
            "STK6",
            "STK7",
            "AURA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 256646,
        "hugoSymbol": "NUTM1",
        "name": "NUT midline carcinoma family member 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000333756",
        "curatedRefSeq": "XM_011521429.1",
        "geneAliases": [
            "FAM22H",
            "NUT",
            "C15orf55"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6794,
        "hugoSymbol": "STK11",
        "name": "serine/threonine kinase 11",
        "oncogene": false,
        "curatedIsoform": "ENST00000326873",
        "curatedRefSeq": "NM_000455.4",
        "geneAliases": [
            "PJS",
            "hLKB1",
            "LKB1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 10892,
        "hugoSymbol": "MALT1",
        "name": "MALT1 paracaspase",
        "oncogene": false,
        "curatedIsoform": "ENST00000348428",
        "curatedRefSeq": "NM_006785.3",
        "geneAliases": [
            "MLT",
            "PCASP1",
            "MLT1",
            "IMD12"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3725,
        "hugoSymbol": "JUN",
        "name": "Jun proto-oncogene, AP-1 transcription factor subunit",
        "oncogene": true,
        "curatedIsoform": "ENST00000371222",
        "curatedRefSeq": "NM_002228.3",
        "geneAliases": [
            "c-Jun",
            "AP1",
            "AP-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 657,
        "hugoSymbol": "BMPR1A",
        "name": "bone morphogenetic protein receptor type 1A",
        "oncogene": false,
        "curatedIsoform": "ENST00000372037",
        "curatedRefSeq": "NM_004329.2",
        "geneAliases": [
            "CD292",
            "10q23del",
            "ACVRLK3",
            "ALK3",
            "SKR5"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5781,
        "hugoSymbol": "PTPN11",
        "name": "protein tyrosine phosphatase, non-receptor type 11",
        "oncogene": true,
        "curatedIsoform": "ENST00000351677",
        "curatedRefSeq": "NM_002834.3",
        "geneAliases": [
            "JMML",
            "CFC",
            "SHP2",
            "PTP2C",
            "PTP-1D",
            "NS1",
            "BPTP3",
            "METCDS",
            "SH-PTP3",
            "SH-PTP2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4763,
        "hugoSymbol": "NF1",
        "name": "neurofibromin 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000358273",
        "curatedRefSeq": "NM_001042492.2",
        "geneAliases": [
            "WSS",
            "NFNS",
            "VRNF"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 8859,
        "hugoSymbol": "STK19",
        "name": "serine/threonine kinase 19",
        "oncogene": false,
        "curatedIsoform": "ENST00000375331",
        "curatedRefSeq": "NM_004197.1",
        "geneAliases": [
            "RP1",
            "D6S60",
            "D6S60E",
            "G11",
            "HLA-RP1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 668,
        "hugoSymbol": "FOXL2",
        "name": "forkhead box L2",
        "oncogene": false,
        "curatedIsoform": "ENST00000330315",
        "curatedRefSeq": "NM_023067.3",
        "geneAliases": [
            "BPES1",
            "BPES",
            "PINTO",
            "POF3",
            "PFRK"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5789,
        "hugoSymbol": "PTPRD",
        "name": "protein tyrosine phosphatase, receptor type D",
        "oncogene": false,
        "curatedIsoform": "ENST00000356435",
        "curatedRefSeq": "NM_002839.3",
        "geneAliases": [
            "HPTP",
            "RPTPDELTA",
            "HPTPD",
            "PTPD",
            "HPTPDELTA"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 672,
        "hugoSymbol": "BRCA1",
        "name": "BRCA1, DNA repair associated",
        "oncogene": false,
        "curatedIsoform": "ENST00000357654",
        "curatedRefSeq": "NM_007294.3",
        "geneAliases": [
            "RNF53",
            "IRIS",
            "BRCAI",
            "PNCA4",
            "PSCP",
            "BROVCA1",
            "BRCC1",
            "FANCS",
            "PPP1R53"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 673,
        "hugoSymbol": "BRAF",
        "name": "B-Raf proto-oncogene, serine/threonine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000288602",
        "curatedRefSeq": "NM_004333.4",
        "geneAliases": [
            "NS7",
            "B-raf",
            "BRAF1",
            "RAFB1",
            "B-RAF1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 675,
        "hugoSymbol": "BRCA2",
        "name": "BRCA2, DNA repair associated",
        "oncogene": false,
        "curatedIsoform": "ENST00000380152",
        "curatedRefSeq": "NM_000059.3",
        "geneAliases": [
            "FANCD1",
            "BROVCA2",
            "XRCC11",
            "FAD",
            "FAD1",
            "BRCC2",
            "GLM3",
            "FACD",
            "FANCD",
            "PNCA2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4771,
        "hugoSymbol": "NF2",
        "name": "neurofibromin 2 (merlin)",
        "oncogene": false,
        "curatedIsoform": "ENST00000338641",
        "curatedRefSeq": "NM_000268.3",
        "geneAliases": [
            "BANF",
            "SCH",
            "ACN"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 54949,
        "hugoSymbol": "SDHAF2",
        "name": "succinate dehydrogenase complex assembly factor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000301761",
        "curatedRefSeq": "NM_017841.2",
        "geneAliases": [
            "PGL2",
            "SDH5",
            "C11orf79"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7849,
        "hugoSymbol": "PAX8",
        "name": "paired box 8",
        "oncogene": true,
        "curatedIsoform": "ENST00000263334",
        "curatedRefSeq": "NM_003466.3",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 5802,
        "hugoSymbol": "PTPRS",
        "name": "protein tyrosine phosphatase, receptor type S",
        "oncogene": false,
        "curatedIsoform": "ENST00000357368",
        "curatedRefSeq": "NM_002850.3",
        "geneAliases": [
            "R-PTP-S",
            "PTPSIGMA",
            "R-PTP-sigma"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4780,
        "hugoSymbol": "NFE2L2",
        "name": "nuclear factor, erythroid 2 like 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000397062",
        "curatedRefSeq": "NM_006164.4",
        "geneAliases": [
            "HEBP1",
            "NRF2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 7852,
        "hugoSymbol": "CXCR4",
        "name": "C-X-C motif chemokine receptor 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000241393",
        "curatedRefSeq": "NM_003467.2",
        "geneAliases": [
            "NPYRL",
            "CD184",
            "NPY3R",
            "HM89",
            "NPYY3R",
            "LAP-3",
            "HSY3RR",
            "D2S201E",
            "LCR1",
            "WHIMS",
            "LESTR",
            "LAP3",
            "FB22",
            "WHIM",
            "NPYR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2735,
        "hugoSymbol": "GLI1",
        "name": "GLI family zinc finger 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000228682",
        "curatedRefSeq": "NM_005269.2",
        "geneAliases": [
            "GLI"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8880,
        "hugoSymbol": "FUBP1",
        "name": "far upstream element binding protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000370768",
        "curatedRefSeq": "NM_003902.3",
        "geneAliases": [
            "FBP",
            "hDH V",
            "FUBP"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 695,
        "hugoSymbol": "BTK",
        "name": "Bruton tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000308731",
        "curatedRefSeq": "NM_000061.2",
        "geneAliases": [
            "AT",
            "IMD1",
            "AGMX1",
            "ATK",
            "BPK",
            "XLA",
            "PSCTK1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4792,
        "hugoSymbol": "NFKBIA",
        "name": "NFKB inhibitor alpha",
        "oncogene": true,
        "curatedIsoform": "ENST00000216797",
        "curatedRefSeq": "NM_020529.2",
        "geneAliases": [
            "IKBA",
            "NFKBI",
            "MAD-3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6850,
        "hugoSymbol": "SYK",
        "name": "spleen associated tyrosine kinase",
        "oncogene": false,
        "curatedIsoform": "ENST00000375746",
        "curatedRefSeq": "NM_003177.5",
        "geneAliases": [
            "p72-Syk"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 10957,
        "hugoSymbol": "PNRC1",
        "name": "proline rich nuclear receptor coactivator 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000336032",
        "curatedRefSeq": "NM_006813.2",
        "geneAliases": [
            "PNAS-145",
            "PRR2",
            "B4-2",
            "PROL2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2767,
        "hugoSymbol": "GNA11",
        "name": "G protein subunit alpha 11",
        "oncogene": true,
        "curatedIsoform": "ENST00000078429",
        "curatedRefSeq": "NM_002067.2",
        "geneAliases": [
            "GNA-11",
            "FBH2",
            "HYPOC2",
            "FHH2",
            "FBH",
            "HHC2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 3791,
        "hugoSymbol": "KDR",
        "name": "kinase insert domain receptor",
        "oncogene": true,
        "curatedIsoform": "ENST00000263923",
        "curatedRefSeq": "NM_002253.2",
        "geneAliases": [
            "VEGFR2",
            "CD309",
            "VEGFR",
            "FLK1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8915,
        "hugoSymbol": "BCL10",
        "name": "B-cell CLL/lymphoma 10",
        "oncogene": false,
        "curatedIsoform": "ENST00000370580",
        "curatedRefSeq": "NM_003921.4",
        "geneAliases": [
            "c-E10",
            "CIPER",
            "mE10",
            "CLAP",
            "IMD37",
            "CARMEN"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 83667,
        "hugoSymbol": "SESN2",
        "name": "sestrin 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000253063",
        "curatedRefSeq": "NM_031459.4",
        "geneAliases": [
            "SES2",
            "HI95",
            "SEST2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2776,
        "hugoSymbol": "GNAQ",
        "name": "G protein subunit alpha q",
        "oncogene": true,
        "curatedIsoform": "ENST00000286548",
        "curatedRefSeq": "NM_002072.3",
        "geneAliases": [
            "G-ALPHA-q",
            "GAQ",
            "CMC1",
            "SWS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4824,
        "hugoSymbol": "NKX3-1",
        "name": "NK3 homeobox 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000380871",
        "curatedRefSeq": "NM_006167.3",
        "geneAliases": [
            "NKX3A",
            "NKX3.1",
            "BAPX2",
            "NKX3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2778,
        "hugoSymbol": "GNAS",
        "name": "GNAS complex locus",
        "oncogene": true,
        "curatedIsoform": "ENST00000371085",
        "curatedRefSeq": "NM_000516.4",
        "geneAliases": [
            "NESP",
            "SgVI",
            "C20orf45",
            "GNAS1",
            "GSA",
            "GSP",
            "GPSA",
            "AHO",
            "POH",
            "SCG6"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 79577,
        "hugoSymbol": "CDC73",
        "name": "cell division cycle 73",
        "oncogene": false,
        "curatedIsoform": "ENST00000367435",
        "curatedRefSeq": "NM_024529.4",
        "geneAliases": [
            "HYX",
            "HRPT2",
            "HPTJT",
            "C1orf28",
            "FIHP",
            "HRPT1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8929,
        "hugoSymbol": "PHOX2B",
        "name": "paired like homeobox 2b",
        "oncogene": false,
        "curatedIsoform": "ENST00000226382",
        "curatedRefSeq": "NM_003924.3",
        "geneAliases": [
            "PMX2B",
            "NBLST2",
            "NBPhox"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 23269,
        "hugoSymbol": "MGA",
        "name": "MGA, MAX dimerization protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000219905",
        "curatedRefSeq": "NM_001164273.1",
        "geneAliases": [
            "MAD5",
            "MXD5"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 3815,
        "hugoSymbol": "KIT",
        "name": "KIT proto-oncogene receptor tyrosine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000288135",
        "curatedRefSeq": "NM_000222.2",
        "geneAliases": [
            "PBT",
            "C-Kit",
            "CD117",
            "SCFR"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6890,
        "hugoSymbol": "TAP1",
        "name": "transporter 1, ATP binding cassette subfamily B member",
        "oncogene": false,
        "curatedIsoform": "ENST00000354258",
        "curatedRefSeq": "NM_000593.5",
        "geneAliases": [
            "ABCB2",
            "TAP1*0102N",
            "RING4",
            "APT1",
            "D6S114E",
            "PSF-1",
            "ABC17",
            "PSF1",
            "TAP1N"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6891,
        "hugoSymbol": "TAP2",
        "name": "transporter 2, ATP binding cassette subfamily B member",
        "oncogene": false,
        "curatedIsoform": "ENST00000374899",
        "curatedRefSeq": "NM_018833.2",
        "geneAliases": [
            "ABCB3",
            "APT2",
            "PSF-2",
            "RING11",
            "D6S217E",
            "PSF2",
            "ABC18"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9965,
        "hugoSymbol": "FGF19",
        "name": "fibroblast growth factor 19",
        "oncogene": true,
        "curatedIsoform": "ENST00000294312",
        "curatedRefSeq": "NM_005117.2",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 9968,
        "hugoSymbol": "MED12",
        "name": "mediator complex subunit 12",
        "oncogene": true,
        "curatedIsoform": "ENST00000374080",
        "curatedRefSeq": "NM_005120.2",
        "geneAliases": [
            "ARC240",
            "TNRC11",
            "TRAP230",
            "OPA1",
            "OKS",
            "MED12S",
            "HOPA",
            "CAGH45",
            "FGS1",
            "OHDOX"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4851,
        "hugoSymbol": "NOTCH1",
        "name": "notch 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000277541",
        "curatedRefSeq": "NM_017617.3",
        "geneAliases": [
            "TAN1",
            "hN1",
            "AOVD1",
            "AOS5"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4853,
        "hugoSymbol": "NOTCH2",
        "name": "notch 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000256646",
        "curatedRefSeq": "NM_024408.3",
        "geneAliases": [
            "HJCYS",
            "AGS2",
            "hN2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 4854,
        "hugoSymbol": "NOTCH3",
        "name": "notch 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000263388",
        "curatedRefSeq": "NM_000435.2",
        "geneAliases": [
            "CADASIL",
            "IMF2",
            "LMNS",
            "CASIL",
            "CADASIL1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4855,
        "hugoSymbol": "NOTCH4",
        "name": "notch 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000375023",
        "curatedRefSeq": "NM_004557.3",
        "geneAliases": [
            "INT3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5879,
        "hugoSymbol": "RAC1",
        "name": "ras-related C3 botulinum toxin substrate 1 (rho family, small GTP binding protein Rac1)",
        "oncogene": true,
        "curatedIsoform": "ENST00000356142",
        "curatedRefSeq": "NM_018890.3",
        "geneAliases": [
            "p21-Rac1",
            "Rac-1",
            "MIG5",
            "TC-25"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5880,
        "hugoSymbol": "RAC2",
        "name": "ras-related C3 botulinum toxin substrate 2 (rho family, small GTP binding protein Rac2)",
        "oncogene": false,
        "curatedIsoform": "ENST00000249071",
        "curatedRefSeq": "NM_002872.4",
        "geneAliases": [
            "Gx",
            "EN-7",
            "p21-Rac2",
            "HSPC022"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1786,
        "hugoSymbol": "DNMT1",
        "name": "DNA (cytosine-5-)-methyltransferase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000340748",
        "curatedRefSeq": "NM_001379.2",
        "geneAliases": [
            "CXXC9",
            "DNMT",
            "ADCADN",
            "AIM",
            "MCMT",
            "HSN1E",
            "m.HsaI"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1788,
        "hugoSymbol": "DNMT3A",
        "name": "DNA methyltransferase 3 alpha",
        "oncogene": false,
        "curatedIsoform": "ENST00000264709",
        "curatedRefSeq": "NM_022552.4",
        "geneAliases": [
            "DNMT3A2",
            "TBRS",
            "M.HsaIIIA"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 1789,
        "hugoSymbol": "DNMT3B",
        "name": "DNA methyltransferase 3 beta",
        "oncogene": false,
        "curatedIsoform": "ENST00000328111",
        "curatedRefSeq": "NM_006892.3",
        "geneAliases": [
            "ICF1",
            "M.HsaIIIB",
            "ICF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5885,
        "hugoSymbol": "RAD21",
        "name": "RAD21 cohesin complex component",
        "oncogene": false,
        "curatedIsoform": "ENST00000297338",
        "curatedRefSeq": "NM_006265.2",
        "geneAliases": [
            "HRAD21",
            "MCD1",
            "HR21",
            "SCC1",
            "hHR21",
            "CDLS4",
            "NXP1"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5888,
        "hugoSymbol": "RAD51",
        "name": "RAD51 recombinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000267868",
        "curatedRefSeq": "NM_002875.4",
        "geneAliases": [
            "RAD51A",
            "HRAD51",
            "MRMV2",
            "RECA",
            "HsRad51",
            "FANCR",
            "HsT16930",
            "BRCC5"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5889,
        "hugoSymbol": "RAD51C",
        "name": "RAD51 paralog C",
        "oncogene": false,
        "curatedIsoform": "ENST00000337432",
        "curatedRefSeq": "NM_058216.2",
        "geneAliases": [
            "BROVCA3",
            "R51H3",
            "FANCO",
            "RAD51L2"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5890,
        "hugoSymbol": "RAD51B",
        "name": "RAD51 paralog B",
        "oncogene": false,
        "curatedIsoform": "ENST00000487270",
        "curatedRefSeq": "NM_133509.3",
        "geneAliases": [
            "R51H2",
            "REC2",
            "RAD51L1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5892,
        "hugoSymbol": "RAD51D",
        "name": "RAD51 paralog D",
        "oncogene": false,
        "curatedIsoform": "ENST00000335858",
        "curatedRefSeq": "NM_133629.2",
        "geneAliases": [
            "BROVCA4",
            "R51H3",
            "TRAD",
            "RAD51L3"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 3845,
        "hugoSymbol": "KRAS",
        "name": "KRAS proto-oncogene, GTPase",
        "oncogene": true,
        "curatedIsoform": "ENST00000256078",
        "curatedRefSeq": "NM_033360.2",
        "geneAliases": [
            "KI-RAS",
            "RALD",
            "NS",
            "RASK2",
            "CFC2",
            "K-RAS2B",
            "K-RAS2A",
            "K-RAS4B",
            "NS3",
            "K-RAS4A",
            "C-K-RAS",
            "KRAS2",
            "KRAS1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4869,
        "hugoSymbol": "NPM1",
        "name": "nucleophosmin (nucleolar phosphoprotein B23, numatrin)",
        "oncogene": false,
        "curatedIsoform": "ENST00000296930",
        "curatedRefSeq": "NM_002520.6",
        "geneAliases": [
            "B23",
            "NPM"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5893,
        "hugoSymbol": "RAD52",
        "name": "RAD52 homolog, DNA repair protein",
        "oncogene": false,
        "curatedIsoform": "ENST00000358495",
        "curatedRefSeq": "NM_134424.2",
        "geneAliases": [],
        "tsg": false
    },
    {
        "entrezGeneId": 5894,
        "hugoSymbol": "RAF1",
        "name": "Raf-1 proto-oncogene, serine/threonine kinase",
        "oncogene": true,
        "curatedIsoform": "ENST00000251849",
        "curatedRefSeq": "NM_002880.3",
        "geneAliases": [
            "NS5",
            "c-Raf",
            "CMD1NN",
            "Raf-1",
            "CRAF"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8968,
        "hugoSymbol": "HIST1H3F",
        "name": "histone cluster 1, H3f",
        "oncogene": false,
        "curatedIsoform": "ENST00000446824",
        "curatedRefSeq": "NM_021018.2",
        "geneAliases": [
            "H3/i",
            "H3FI"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6921,
        "hugoSymbol": "TCEB1",
        "name": "transcription elongation factor B subunit 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000284811",
        "curatedRefSeq": "NM_005648.3",
        "geneAliases": [
            "SIII",
            "eloC"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 23308,
        "hugoSymbol": "ICOSLG",
        "name": "inducible T-cell costimulator ligand",
        "oncogene": false,
        "curatedIsoform": "ENST00000407780",
        "curatedRefSeq": "NM_015259.4",
        "geneAliases": [
            "CD275",
            "B7H2",
            "GL50",
            "B7RP1",
            "B7-H2",
            "B7RP-1",
            "ICOS-L",
            "ICOSL",
            "LICOS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 11021,
        "hugoSymbol": "RAB35",
        "name": "RAB35, member RAS oncogene family",
        "oncogene": false,
        "curatedIsoform": "ENST00000229340",
        "curatedRefSeq": "NM_006861.6",
        "geneAliases": [
            "RAB1C",
            "H-ray",
            "RAY"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6926,
        "hugoSymbol": "TBX3",
        "name": "T-box 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000257566",
        "curatedRefSeq": "NM_016569.3",
        "geneAliases": [
            "UMS",
            "TBX3-ISO",
            "XHL"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6927,
        "hugoSymbol": "HNF1A",
        "name": "HNF1 homeobox A",
        "oncogene": false,
        "curatedIsoform": "ENST00000257555",
        "curatedRefSeq": "NM_000545.5",
        "geneAliases": [
            "HNF1",
            "IDDM20",
            "TCF-1",
            "HNF-1A",
            "LFB1",
            "TCF1",
            "MODY3"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 10000,
        "hugoSymbol": "AKT3",
        "name": "AKT serine/threonine kinase 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000263826",
        "curatedRefSeq": "NM_005465.4",
        "geneAliases": [
            "RAC-gamma",
            "PRKBG",
            "RAC-PK-gamma",
            "MPPH2",
            "PKBG",
            "PKB-GAMMA",
            "STK-2",
            "MPPH"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6929,
        "hugoSymbol": "TCF3",
        "name": "transcription factor 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000344749",
        "curatedRefSeq": "NM_001136139.2",
        "geneAliases": [
            "TCF-3",
            "ITF1",
            "E2A",
            "E47",
            "AGM8",
            "VDIR",
            "bHLHb21"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 57105,
        "hugoSymbol": "CYSLTR2",
        "name": "cysteinyl leukotriene receptor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000282018",
        "curatedRefSeq": "NM_020377.2",
        "geneAliases": [
            "HG57",
            "CYSLT2R",
            "HPN321",
            "GPCR21",
            "KPG_011",
            "hGPCR21",
            "CYSLT2",
            "PSEC0146"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 6934,
        "hugoSymbol": "TCF7L2",
        "name": "transcription factor 7 like 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000543371",
        "curatedRefSeq": "NM_001146274.1",
        "geneAliases": [
            "TCF-4",
            "TCF4"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5914,
        "hugoSymbol": "RARA",
        "name": "retinoic acid receptor alpha",
        "oncogene": false,
        "curatedIsoform": "ENST00000254066",
        "curatedRefSeq": "NM_000964.3",
        "geneAliases": [
            "RAR",
            "NR1B1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 8986,
        "hugoSymbol": "RPS6KA4",
        "name": "ribosomal protein S6 kinase A4",
        "oncogene": false,
        "curatedIsoform": "ENST00000334205",
        "curatedRefSeq": "NM_003942.2",
        "geneAliases": [
            "RSK-B",
            "S6K-alpha-4",
            "MSK2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 440093,
        "hugoSymbol": "H3F3C",
        "name": "H3 histone, family 3C",
        "oncogene": false,
        "curatedIsoform": "ENST00000340398",
        "curatedRefSeq": "NM_001013699.2",
        "geneAliases": [
            "H3.5"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4893,
        "hugoSymbol": "NRAS",
        "name": "neuroblastoma RAS viral oncogene homolog",
        "oncogene": true,
        "curatedIsoform": "ENST00000369535",
        "curatedRefSeq": "NM_002524.4",
        "geneAliases": [
            "CMNS",
            "NS6",
            "ALPS4",
            "N-ras",
            "NRAS1",
            "NCMS"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5921,
        "hugoSymbol": "RASA1",
        "name": "RAS p21 protein activator 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000274376",
        "curatedRefSeq": "NM_002890.2",
        "geneAliases": [
            "CM-AVM",
            "PKWS",
            "GAP",
            "p120GAP",
            "p120RASGAP",
            "CMAVM",
            "RASGAP",
            "RASA",
            "p120"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 10018,
        "hugoSymbol": "BCL2L11",
        "name": "BCL2 like 11",
        "oncogene": false,
        "curatedIsoform": "ENST00000393256",
        "curatedRefSeq": "NM_138621.4",
        "geneAliases": [
            "BOD",
            "BIM",
            "BAM"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 10019,
        "hugoSymbol": "SH2B3",
        "name": "SH2B adaptor protein 3",
        "oncogene": false,
        "curatedIsoform": "ENST00000341259",
        "curatedRefSeq": "NM_005475.2",
        "geneAliases": [
            "IDDM20",
            "LNK"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5925,
        "hugoSymbol": "RB1",
        "name": "RB transcriptional corepressor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000267163",
        "curatedRefSeq": "NM_000321.2",
        "geneAliases": [
            "OSRC",
            "RB",
            "PPP1R130",
            "pRb",
            "p105-Rb",
            "pp110"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5927,
        "hugoSymbol": "KDM5A",
        "name": "lysine demethylase 5A",
        "oncogene": false,
        "curatedIsoform": "ENST00000399788",
        "curatedRefSeq": "NM_001042603.1",
        "geneAliases": [
            "RBP2",
            "RBBP2",
            "RBBP-2"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 811,
        "hugoSymbol": "CALR",
        "name": "calreticulin",
        "oncogene": false,
        "curatedIsoform": "ENST00000316448",
        "curatedRefSeq": "NM_004343.3",
        "geneAliases": [
            "SSA",
            "cC1qR",
            "CRT",
            "HEL-S-99n",
            "RO"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4913,
        "hugoSymbol": "NTHL1",
        "name": "nth-like DNA glycosylase 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000219066",
        "curatedRefSeq": "NM_002528.5",
        "geneAliases": [
            "OCTS3",
            "hNTH1",
            "NTH1",
            "FAP3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4914,
        "hugoSymbol": "NTRK1",
        "name": "neurotrophic receptor tyrosine kinase 1",
        "oncogene": true,
        "curatedIsoform": "ENST00000524377",
        "curatedRefSeq": "NM_002529.3",
        "geneAliases": [
            "TRK1",
            "TRKA",
            "Trk-A",
            "TRK",
            "p140-TrkA",
            "MTC"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 387893,
        "hugoSymbol": "KMT5A",
        "name": "lysine methyltransferase 5A",
        "oncogene": false,
        "curatedIsoform": "ENST00000330479",
        "curatedRefSeq": "NM_020382.3",
        "geneAliases": [
            "SET8",
            "PR-Set7",
            "SETD8",
            "SET07"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4915,
        "hugoSymbol": "NTRK2",
        "name": "neurotrophic receptor tyrosine kinase 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000277120",
        "curatedRefSeq": "NM_006180.3",
        "geneAliases": [
            "TRKB",
            "GP145-TrkB",
            "trk-B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4916,
        "hugoSymbol": "NTRK3",
        "name": "neurotrophic receptor tyrosine kinase 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000360948",
        "curatedRefSeq": "NM_001012338.2",
        "geneAliases": [
            "TRKC",
            "GP145-TrkC",
            "gp145(trkC)"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1846,
        "hugoSymbol": "DUSP4",
        "name": "dual specificity phosphatase 4",
        "oncogene": false,
        "curatedIsoform": "ENST00000240100",
        "curatedRefSeq": "NM_001394.6",
        "geneAliases": [
            "MKP2",
            "MKP-2",
            "HVH2",
            "TYP"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 57144,
        "hugoSymbol": "PAK5",
        "name": "p21 (RAC1) activated kinase 5",
        "oncogene": false,
        "curatedIsoform": "ENST00000353224",
        "curatedRefSeq": "NM_177990.2",
        "geneAliases": [
            "PAK7"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 4921,
        "hugoSymbol": "DDR2",
        "name": "discoidin domain receptor tyrosine kinase 2",
        "oncogene": true,
        "curatedIsoform": "ENST00000367921",
        "curatedRefSeq": "NM_006182.2",
        "geneAliases": [
            "NTRKR3",
            "MIG20a",
            "TYRO10",
            "TKT"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2874,
        "hugoSymbol": "GPS2",
        "name": "G protein pathway suppressor 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000380728",
        "curatedRefSeq": "NM_004489.4",
        "geneAliases": [
            "AMF-1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 9020,
        "hugoSymbol": "MAP3K14",
        "name": "mitogen-activated protein kinase kinase kinase 14",
        "oncogene": false,
        "curatedIsoform": "ENST00000344686",
        "curatedRefSeq": "NM_003954.3",
        "geneAliases": [
            "NIK",
            "HSNIK",
            "HS",
            "FTDCR1B"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 79679,
        "hugoSymbol": "VTCN1",
        "name": "V-set domain containing T cell activation inhibitor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000369458",
        "curatedRefSeq": "NM_024626.3",
        "geneAliases": [
            "VCTN1",
            "B7X",
            "B7h.5",
            "PRO1291",
            "B7S1",
            "B7-H4",
            "B7H4"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 64321,
        "hugoSymbol": "SOX17",
        "name": "SRY-box 17",
        "oncogene": false,
        "curatedIsoform": "ENST00000297316",
        "curatedRefSeq": "NM_022454.3",
        "geneAliases": [
            "VUR3"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 64324,
        "hugoSymbol": "NSD1",
        "name": "nuclear receptor binding SET domain protein 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000439151",
        "curatedRefSeq": "NM_022455.4",
        "geneAliases": [
            "KMT3B",
            "SOTOS1",
            "SOTOS",
            "ARA267",
            "STO"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 64326,
        "hugoSymbol": "RFWD2",
        "name": "ring finger and WD repeat domain 2",
        "oncogene": false,
        "curatedIsoform": "ENST00000367669",
        "curatedRefSeq": "NM_022457.5",
        "geneAliases": [
            "RNF200",
            "COP1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 841,
        "hugoSymbol": "CASP8",
        "name": "caspase 8",
        "oncogene": false,
        "curatedIsoform": "ENST00000358485",
        "curatedRefSeq": "NM_001080125.1",
        "geneAliases": [
            "ALPS2B",
            "Casp-8",
            "MCH5",
            "MACH",
            "FLICE",
            "CAP4"
        ],
        "tsg": true
    },
    {
        "entrezGeneId": 5965,
        "hugoSymbol": "RECQL",
        "name": "RecQ like helicase",
        "oncogene": false,
        "curatedIsoform": "ENST00000421138",
        "curatedRefSeq": "NM_032941.2",
        "geneAliases": [
            "RecQ1",
            "RECQL1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5966,
        "hugoSymbol": "REL",
        "name": "REL proto-oncogene, NF-kB subunit",
        "oncogene": false,
        "curatedIsoform": "ENST00000295025",
        "curatedRefSeq": "NM_002908.2",
        "geneAliases": [
            "C-Rel"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 1871,
        "hugoSymbol": "E2F3",
        "name": "E2F transcription factor 3",
        "oncogene": true,
        "curatedIsoform": "ENST00000346618",
        "curatedRefSeq": "NM_001949.4",
        "geneAliases": [
            "E2F-3"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 2903,
        "hugoSymbol": "GRIN2A",
        "name": "glutamate ionotropic receptor NMDA type subunit 2A",
        "oncogene": false,
        "curatedIsoform": "ENST00000330684",
        "curatedRefSeq": "NM_001134407.1",
        "geneAliases": [
            "FESD",
            "EPND",
            "LKS",
            "NR2A",
            "GluN2A",
            "NMDAR2A"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5976,
        "hugoSymbol": "UPF1",
        "name": "UPF1, RNA helicase and ATPase",
        "oncogene": false,
        "curatedIsoform": "ENST00000262803",
        "curatedRefSeq": "NM_002911.3",
        "geneAliases": [
            "HUPF1",
            "pNORF1",
            "smg-2",
            "NORF1",
            "RENT1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 5979,
        "hugoSymbol": "RET",
        "name": "ret proto-oncogene",
        "oncogene": true,
        "curatedIsoform": "ENST00000355710",
        "curatedRefSeq": "NM_020975.4",
        "geneAliases": [
            "MTC1",
            "CDHF12",
            "CDHR16",
            "MEN2A",
            "RET51",
            "HSCR1",
            "MEN2B",
            "PTC",
            "RET-ELE1"
        ],
        "tsg": false
    },
    {
        "entrezGeneId": 861,
        "hugoSymbol": "RUNX1",
        "name": "runt related transcription factor 1",
        "oncogene": false,
        "curatedIsoform": "ENST00000300305",
        "curatedRefSeq": "NM_001754.4",
        "geneAliases": [
            "AML1-EVI-1",
            "CBF2alpha",
            "CBFA2",
            "EVI-1",
            "PEBP2aB",
            "AMLCR1",
            "PEBP2alpha",
            "AML1"
        ],
        "tsg": true
    }
]