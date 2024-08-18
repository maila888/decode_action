//Sun Aug 18 2024 00:50:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x53f0b7 = "网络异常，跳过";
const _0x5b79ee = require("request");
const _0x3fff48 = require("crypto");
const _0x3fd6cb = process.env.HOST || "http://api.94wan.fun";
const _0xa383f8 = process.env.SIGN_HOST || "http://api.94wan.fun";
const {
  sendNotify
} = require("./sendNotify1.js");
const _0x5f3db5 = require("dns");
const _0x4f1a3e = require("md5");
const _0x5a3417 = ["iPad;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/0;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/1436;psn/BS6Y9SAiw0IpJ4ro7rjSOkCRZTgR3z2K|10;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/10.5;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.1;59d6ae6e8387bd09fe046d5b8918ead51614e80a;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.26;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/59d6ae6e8387bd09fe046d5b8918ead51614e80a|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;22d679c006bf9c087abf362cf1d2e0020ebb8798;network/wifi;ADID/10857A57-DDF8-4A0D-A548-7B8F43AC77EE;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,1;addressid/2378947694;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/15.7;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/6;ads/;psn/22d679c006bf9c087abf362cf1d2e0020ebb8798|22;jdv/0|kong|t_1000170135|tuiguang|notset|1614153044558|1614153044;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2616935633265383-5333463636261326;network/UNKNOWN;model/M2007J3SC;addressid/1840745247;aid/ba9e3b5853dccb1b;oaid/371d8af7dd71e8d5;osVer/29;appBuild/1436;psn/t7JmxZUXGkimd4f9Jdul2jEeuYLwxPrm|8;psq/6;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.6;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; M2007J3SC Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.3;d7beab54pp63cy3hywhf30swecxq13c5nt0kek9m;network/4g;ADID/97AD46C9-6D49-4642-BF6F-689256673906;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5;network/wifi;ADID/5603541B-30C1-4B5C-A782-20D0B569D810;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/1041002757;hasOCPay/0;appBuild/101;supportBestPay/0;pv/34.6;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5|44;jdv/0|androidapp|t_335139774|appshare|CopyURL|1612612940307|1612612944;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;21631ed983b3e854a3154b0336413825ad0d6783;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;500a795cb2abae60b877ee4a1930557a800bef1c;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;f5e7b7980fb50efc9c294ac38653c1584846c3db;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;19fef5419f88076c43f5317eabe20121d52c6a61;network/wifi;ADID/00000000-0000-0000-0000-000000000000;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/3430850943;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.4;apprpd/;ref/JDLTSubMainPageViewController;psq/3;ads/;psn/19fef5419f88076c43f5317eabe20121d52c6a61|16;jdv/0|kong|t_1001327829_|jingfen|f51febe09dd64b20b06bc6ef4c1ad790#/|1614096460311|1614096511;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;12.2;f995bc883282f7c7ea9d7f32da3f658127aa36c7;network/4g;ADID/9F40F4CA-EA7C-4F2E-8E09-97A66901D83E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,4;addressid/525064695;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/11.11;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/f995bc883282f7c7ea9d7f32da3f658127aa36c7|22;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 12.2;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;5366566313931326-6633931643233693;network/wifi;model/Mi9 Pro 5G;addressid/0;aid/5fe6191bf39a42c9;oaid/e3a9473ef6699f75;osVer/29;appBuild/1436;psn/b3rJlGi AwLqa9AqX7Vp0jv4T7XPMa0o|5;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; Mi9 Pro 5G Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/666624049;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/54.11;apprpd/MessageCenter_MessageMerge;ref/MessageCenterController;psq/10;ads/;psn/4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1|101;jdv/0|kong|t_2010804675_|jingfen|810dab1ba2c04b8588c5aa5a0d44c4bd|1614183499;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.2;c71b599e9a0bcbd8d1ad924d85b5715530efad06;network/wifi;ADID/751C6E92-FD10-4323-B37C-187FD0CF0551;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/4053561885;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/263.8;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/c71b599e9a0bcbd8d1ad924d85b5715530efad06|481;jdv/0|kong|t_1001610202_|jingfen|3911bea7ee2f4fcf8d11fdf663192bbe|1614157052210|1614157056;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;2d306ee3cacd2c02560627a5113817ebea20a2c9;network/4g;ADID/A346F099-3182-4889-9A62-2B3C28AB861E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.35;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/0;ads/;psn/2d306ee3cacd2c02560627a5113817ebea20a2c9|2;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;28355aff16cec8bcf3e5728dbbc9725656d8c2c2;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/833058617;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.10;apprpd/;ref/JDLTWebViewController;psq/9;ads/;psn/28355aff16cec8bcf3e5728dbbc9725656d8c2c2|5;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;24ddac73a3de1b91816b7aedef53e97c4c313733;network/4g;ADID/598C6841-76AC-4512-AA97-CBA940548D70;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone11,6;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/12.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/24ddac73a3de1b91816b7aedef53e97c4c313733|23;jdv/0|kong|t_1000170135|tuiguang|notset|1614126110904|1614126110;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/25239372;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/8.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b|14;jdv/0|kong|t_1001226363_|jingfen|5713234d1e1e4893b92b2de2cb32484d|1614182989528|1614182992;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;ca1a32afca36bc9fb37fd03f18e653bce53eaca5;network/wifi;ADID/3AF380AB-CB74-4FE6-9E7C-967693863CA3;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone8,1;addressid/138323416;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/72.12;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/ca1a32afca36bc9fb37fd03f18e653bce53eaca5|109;jdv/0|kong|t_1000536212_|jingfen|c82bfa19e33a4269a5884ffc614790f4|1614141246;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;7346933333666353-8333366646039373;network/wifi;model/ONEPLUS A5010;addressid/138117973;aid/7d933f6583cfd097;oaid/;osVer/29;appBuild/1436;psn/T/eqfRSwp8VKEvvXyEunq09Cg2MUkiQ5|17;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/11.4;jdv/0|kong|t_1001849073_|jingfen|495a47f6c0b8431c9d460f61ad2304dc|1614084403978|1614084407;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;11;4626269356736353-5353236346334673;network/wifi;model/M2006J10C;addressid/0;aid/dbb9e7655526d3d7;oaid/66a7af49362987b0;osVer/30;appBuild/1436;psn/rQRQgJ 4 S3qkq8YDl28y6jkUHmI/rlX|3;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/3.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 11; M2006J10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "iPhone;3.7.0;14.4;78fc1d919de0c8c2de15725eff508d8ab14f9c82;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,1;addressid/137829713;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/23.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/78fc1d919de0c8c2de15725eff508d8ab14f9c82|34;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1612508702380|1612534293;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;0373263343266633-5663030363465326;network/wifi;model/Redmi Note 7;addressid/590846082;aid/07b34bf3e6006d5b;oaid/17975a142e67ec92;osVer/29;appBuild/1436;psn/OHNqtdhQKv1okyh7rB3HxjwI00ixJMNG|4;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.3;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "android;3.7.0;10;3636566623663623-1693635613166646;network/wifi;model/ASUS_I001DA;addressid/1397761133;aid/ccef2fc2a96e1afd;oaid/;osVer/29;appBuild/1436;psn/T8087T0D82PHzJ4VUMGFrfB9dw4gUnKG|76;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/73.5;jdv/0|kong|t_1002354188_|jingfen|2335e043b3344107a2750a781fde9a2e#/|1614097081426|1614097087;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/yingyongbao;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ASUS_I001DA Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/138419019;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.7;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/6;ads/;psn/4ee6af0db48fd605adb69b63f00fcbb51c2fc3f0|9;jdv/0|direct|-|none|-|1613705981655|1613823229;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/F9FD7728-2956-4DD1-8EDD-58B07950864C;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;ADID/5D306F0D-A131-4B26-947E-166CCB9BFFFF;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad8,9;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.20;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/d9f5ddaa0160a20f32fb2c8bfd174fae7993c1b4|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.5;Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/31548A9C-8A01-469A-B148-E7D841C91FD0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.5;apprpd/;ref/JDLTSubMainPageViewController;psq/4;ads/;psn/a858fb4b40e432ea32f80729916e6c3e910bb922|12;jdv/0|direct|-|none|-|1613898710373|1613898712;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;3346332626262353-1666434336539336;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;8363834353530333132333132373-43D2930366035323639333662383;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;1343467336264693-3343562673463613;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;8353636393732346-6646931673935346;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;6d343c58764a908d4fa56609da4cb3a5cc1396d3;network/wifi;ADID/4965D884-3E61-4C4E-AEA7-9A8CE3742DA7;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.6.1;4606ddccdfe8f343f8137de7fea7f91fc4aef3a3;network/4g;ADID/C6FB6E20-D334-45FA-818A-7A4C58305202;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone10,1;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/4606ddccdfe8f343f8137de7fea7f91fc4aef3a3|5;jdv/0|iosapp|t_335139774|liteshare|Qqfriends|1614206359106|1614206366;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;3b6e79334551fc6f31952d338b996789d157c4e8;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/138051400;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/14.34;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/12;ads/;psn/3b6e79334551fc6f31952d338b996789d157c4e8|46;jdv/0|kong|t_1001707023_|jingfen|e80d7173a4264f4c9a3addcac7da8b5d|1613837384708|1613858760;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;1346235693831363-2373837393932673;network/wifi;model/LYA-AL00;addressid/3321567203;aid/1d2e9816278799b7;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/1436;psn/45VUZFTZJkhP5fAXbeBoQ0   O2GCB I|7;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.8;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1614066210320|1614066219;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/huawei;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36", "iPhone;3.7.0;14.3;c2a8854e622a1b17a6c56c789f832f9d78ef1ba7;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/c2a8854e622a1b17a6c56c789f832f9d78ef1ba7|6;jdv/0|direct|-|none|-|1613541016735|1613823566;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;;network/wifi;model/MIX 2S;addressid/;aid/f87efed6d9ed3c65;oaid/94739128ef9dd245;osVer/28;appBuild/1436;psn/R7wD/OWkQjYWxax1pDV6kTIDFPJCUid7C/nl2hHnUuI=|3;psq/13;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/1.42;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2S Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/3g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/2813715704;pv/67.38;apprpd/MyJD_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F2ynE8QDtc2svd36VowmYWBzzDdK6%2Findex.html%3Flng%3D103.957532%26lat%3D30.626962%26sid%3D4fe8ef4283b24723a7bb30ee87c18b2w%26un_area%3D22_1930_49324_52512;psq/4;ads/;psn/5aef178f95931bdbbde849ea9e2fc62b18bc5829|127;jdv/0|direct|-|none|-|1612588090667|1613822580;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/3104834020;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/c633e62b5a4ad0fdd93d9862bdcacfa8f3ecef63|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,4;addressid/1477231693;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/21.15;apprpd/MyJD_Main;ref/https%3A%2F%2Fgold.jd.com%2F%3Flng%3D0.000000%26lat%3D0.000000%26sid%3D4584eb84dc00141b0d58e000583a338w%26un_area%3D19_1607_3155_62114;psq/0;ads/;psn/2c822e59db319590266cc83b78c4a943783d0077|46;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/3.49;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/7;ads/;psn/9e0e0ea9c6801dfd53f2e50ffaa7f84c7b40cd15|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad7,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.14;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/3;ads/;psn/956c074c769cd2eeab2e36fca24ad4c9e469751a|8;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"];
const _0x55a626 = require("child_process").exec;
const {
  getEnvsByName,
  addEnv,
  updateEnv,
  updateEnv11
} = require("./ql");
function _0x4dcb92(_0x26f36b = 0, _0x4b6f5c = 100) {
  return Math.min(Math.floor(_0x26f36b + Math.random() * (_0x4b6f5c - _0x26f36b)), _0x4b6f5c);
}
const _0x193bfd = _0x5a3417[_0x4dcb92(0, _0x5a3417.length - 1)];
function _0x10e3de(_0x3ade5e = "elmck") {
  console.log("版本：内部版1.0.1\n");
  if (process.env.SIGN_HOST) {
    console.log("正在使用本地 sign\n");
  }
  let _0x47a68b = [];
  let _0xfdccee = process.env[_0x3ade5e];
  if (_0xfdccee) {
    if (_0xfdccee.indexOf("&") > -1) {
      _0x47a68b = _0xfdccee.split("&");
    } else {
      if (_0xfdccee.indexOf("\n") > -1) {
        _0x47a68b = _0xfdccee.split("\n");
      } else {
        _0x47a68b = [_0xfdccee];
      }
    }
  }
  return _0x47a68b;
}
function _0xaa4210(_0xc7773c) {
  return new Promise(_0xb4954 => {
    _0x55a626(_0xc7773c, function (_0x307ec2, _0x120353, _0x4ff14c) {
      if (_0x307ec2) {
        console.error(_0x307ec2);
        _0xb4954("");
      } else {
        _0xb4954(_0x120353);
      }
    });
  });
}
function _0x1e6f95(_0x5a96fb) {
  if (!_0x5a96fb) {
    return "-1";
  }
  let _0x108228 = _0x5a96fb.split(";"),
    _0x23dd51 = 0;
  for (; _0x23dd51 < _0x108228.length; _0x23dd51++) {
    const _0x4987b3 = _0x108228[_0x23dd51].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x4987b3[0])) {
      return _0x4987b3[1];
    }
  }
  return "-1";
}
const _0x52c48d = _0x5eb529 => {
  return new Promise(_0x2223a4 => {
    setTimeout(() => {
      _0x2223a4();
    }, _0x5eb529 * 1000);
  });
};
async function _0x1e092f(_0x40b643) {
  return new Promise(_0x2da290 => {
    try {
      _0x40b643(_0x2da290);
    } catch (_0x3d107c) {
      console.log(_0x53f0b7);
      _0x2da290();
    }
  });
}
const _0x5f25b1 = async (_0x270ed9, _0x2551e1, _0xf37365, _0x18da59 = "", _0x26a5b4, _0x47e6fa = {}, _0x3cd4a0 = 5) => {
  if (_0x3cd4a0 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x222bd1 = await _0xaa4210("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  let _0x13f354 = process.env.ELE_CARME;
  let _0x271007 = 1;
  if (_0x270ed9 === 4) {
    _0x13f354 = process.env.ELE_TTCJ_CARME;
    _0x271007 = 4;
  }
  const _0x76e0ae = {
    carmi: _0x13f354,
    containerId: _0x222bd1,
    type: _0x271007,
    gameType: _0x270ed9,
    stepId: _0x2551e1,
    tokenFirst: _0x18da59,
    appKey: _0xf37365,
    timestamp: _0x26a5b4,
    anotherParam: JSON.stringify(_0x47e6fa)
  };
  const _0x238461 = _0xa383f8 + "/v2/new/sign";
  const _0x34f208 = {
    "content-type": "application/json"
  };
  const _0x302077 = {
    url: _0x238461,
    method: "POST",
    headers: _0x34f208,
    body: JSON.stringify(_0x76e0ae)
  };
  return _0x1e092f(_0x126fcf => {
    _0x5b79ee(_0x302077, async (_0x3bf08c, _0x1bad4d, _0x235ca8) => {
      if (!_0x3bf08c && _0x1bad4d.statusCode === 200) {
        const _0x106db4 = JSON.parse(_0x235ca8);
        if (_0x106db4.code !== 20000) {
          console.error(_0x106db4.message);
          process.exit(0);
        } else {
          _0x126fcf(_0x106db4.data);
        }
      } else {
        if (_0x3bf08c && (_0x3bf08c.message.indexOf("socket hang up") !== -1 || _0x3bf08c.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x52c48d(2);
          _0x126fcf(await _0x5f25b1(_0x270ed9, _0x2551e1, _0xf37365, _0x18da59, _0x3cd4a0 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x126fcf("");
        }
      }
    });
  });
};
const _0xabd4c7 = async (_0x54ff05, _0x19450d, _0x5981da = 5) => {
  _0x54ff05 = _0x54ff05.replace(/\s/g, "");
  let _0x52a494 = _0x1e6f95(_0x54ff05);
  _0x52a494 = _0x52a494.split("_")[0];
  let _0x1cdb48 = 12574478;
  let _0xa68c8b = new Date().getTime();
  const _0x2f5cab = await _0x5f25b1(99, 1, _0x1cdb48, _0x52a494, _0xa68c8b);
  let _0x100974 = _0x2f5cab.sign;
  const _0x3e3dd2 = {
    Cookie: _0x54ff05,
    "User-Agent": _0x193bfd
  };
  const _0x3d8ace = {
    url: "https://shopping.ele.me/h5/mtop.alsc.user.session.ele.check/1.0/?H5Request=true&api=mtop.alsc.user.session.ele.check&appKey=12574478&data={}&dataType=json&jsv=2.6.2&mainDomain=ele.me&pageDomain=ele.me&sign=" + _0x100974 + "&subDomain=shopping&t=" + _0xa68c8b + "&timeout=5000&type=json&v=1.0",
    method: "GET",
    headers: _0x3e3dd2
  };
  return _0x1e092f(_0x344916 => {
    try {
      _0x5b79ee(_0x3d8ace, async (_0x34019b, _0xc25f5a, _0x28e67a) => {
        if (!_0x34019b && _0xc25f5a.statusCode === 200) {
          const _0x31d564 = JSON.parse(_0x28e67a);
          if (_0x31d564.data.errorCode === "000502") {
            console.log("第", _0x19450d + 1, "账号失效！请重新登录！！！😭");
            _0x344916(null);
          } else {
            if (_0x5981da <= 0) {
              if (_0x19450d >= 0) {
                console.log("第", _0x19450d + 1, "cookie存在异常，请检查");
              } else {
                console.log("cookie存在异常，请检查");
              }
              _0x344916(null);
            }
            if (_0x31d564.ret.includes("FAIL_SYS_TOKEN_EXOIRED::令牌过期") || _0x31d564.ret.includes("FAIL_SYS_TOKEN_EMPTY::令牌为空")) {
              _0x344916(await _0x1f2c4a(_0x54ff05, _0x19450d, _0x5981da - 1));
            } else {
              _0x344916(_0x54ff05);
            }
          }
        } else {
          if (_0x34019b && _0x34019b.message.indexOf("Invalid character in header content [\"Cookie\"]") !== -1) {
            console.log("第", _0x19450d + 1, "账号ck不合法，请确认！！！");
          } else {
            console.log(_0x34019b);
          }
          _0x344916(null);
        }
      });
    } catch (_0x457ab5) {
      console.log(_0x53f0b7);
    }
  });
};
function _0x1f2c4a(_0x513260, _0x13f435, _0x24d929 = 5) {
  const _0x395f15 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.queryminecenter/1.0/?jsv=2.6.2&appKey=12574478",
    headers: {}
  };
  _0x395f15.headers.Cookie = _0x513260;
  _0x395f15.headers.method = "GET";
  _0x395f15.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  return _0x1e092f(_0x42c64b => {
    try {
      _0x5b79ee(_0x395f15, async (_0x3e899b, _0x4395ed, _0x53250c) => {
        if (!_0x3e899b && _0x4395ed.statusCode === 200) {
          const _0x3b7127 = JSON.stringify(_0x4395ed.headers["set-cookie"]);
          const _0x35f9af = /_m_h5_tk=(\S*);/;
          const _0x39721d = _0x3b7127.match(_0x35f9af)[1];
          const _0x4ae918 = " _m_h5_tk=" + _0x39721d.split(";")[0];
          const _0x950ef9 = /_m_h5_tk_enc=(\S*);/;
          const _0x4a9f13 = _0x3b7127.match(_0x950ef9)[1];
          const _0x29296f = " _m_h5_tk_enc=" + _0x4a9f13.split(";")[0];
          _0x513260 = _0x158250(_0x4ae918, _0x29296f, _0x513260);
          if (_0x24d929 <= 0) {
            if (_0x13f435 >= 0) {
              console.log("第", _0x13f435 + 1, "cookie存在异常，请检查");
            } else {
              console.log("cookie存在异常，请检查");
            }
            _0x42c64b(null);
          } else {
            _0x42c64b(await _0xabd4c7(_0x513260, _0x13f435, _0x24d929 - 1));
          }
        } else {
          _0x42c64b(null);
        }
      });
    } catch (_0x199633) {
      console.log(_0x53f0b7);
    }
  });
}
function _0x158250(_0x2ffdb1, _0x33aeaa, _0x3abcc8) {
  let _0x46cdec = false;
  for (var _0x5987bd = _0x3abcc8.split(";"), _0x3efc37 = 0; _0x3efc37 < _0x5987bd.length; _0x3efc37++) {
    var _0x71ff3a = _0x5987bd[_0x3efc37].split("=");
    if (["_m_h5_tk", " _m_h5_tk"].indexOf(_0x71ff3a[0]) > -1) {
      _0x46cdec = true;
      _0x5987bd[_0x3efc37] = _0x2ffdb1;
    }
    if ([" _m_h5_tk_enc", "_m_h5_tk_enc"].indexOf(_0x71ff3a[0]) > -1) {
      _0x5987bd[_0x3efc37] = _0x33aeaa;
      _0x46cdec = true;
    }
  }
  var _0x31622a = "";
  if (_0x46cdec) {
    for (_0x3efc37 = 0; _0x3efc37 < _0x5987bd.length; _0x3efc37++) {
      _0x31622a += _0x5987bd[_0x3efc37];
      _0x3efc37 != _0x5987bd.length - 1 && (_0x31622a += ";");
    }
  } else {
    _0x31622a = _0x3abcc8 + ";" + _0x2ffdb1 + ";" + _0x33aeaa;
  }
  _0x3abcc8 = _0x31622a + ";";
  return _0x3abcc8;
}
const _0x4229e9 = _0x179122 => {
  const _0x829af6 = {
    Cookie: _0x179122,
    "user-agent": _0x193bfd
  };
  const _0x5060b4 = {
    url: "https://restapi.ele.me/eus/v5/user_detail",
    headers: _0x829af6
  };
  return _0x1e092f(_0x3ecbd3 => {
    _0x5b79ee(_0x5060b4, async (_0x39f4fa, _0x32471d, _0x7b1f42) => {
      if (!_0x39f4fa && _0x32471d.statusCode === 200) {
        _0x3ecbd3(JSON.parse(_0x7b1f42));
      } else {
        _0x3ecbd3({});
      }
    });
  });
};
const _0x32e452 = async (_0x38afd3, _0x5b69d1, _0xd2f149 = 5) => {
  if (_0xd2f149 === 0) {
    console.log("网络异常，请检查网络状况");
    process.exit(0);
  }
  if (!_0x38afd3) {
    console.log("❌卡密不能为空");
    process.exit(0);
  }
  const _0x2a42b6 = await _0xaa4210("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  const _0x424f42 = _0x3fd6cb + "/check/kami?carmi=" + _0x38afd3 + "&type=" + _0x5b69d1 + "&containerId=" + _0x2a42b6 + "&isNew=true";
  const _0x496bd6 = {
    url: _0x424f42,
    method: "GET"
  };
  return _0x1e092f(_0x43dd55 => {
    _0x5b79ee(_0x496bd6, async (_0x525a04, _0x412820, _0x143ee7) => {
      if (!_0x525a04 && _0x412820.statusCode === 200) {
        const _0x505443 = JSON.parse(_0x143ee7);
        if (_0x505443.code !== 20000) {
          console.error(_0x505443.message);
          process.exit(0);
        } else {
          console.log("\n" + _0x505443.data.msg);
          _0x43dd55(_0x505443);
        }
      } else {
        if (_0x525a04 && (_0x525a04.message.indexOf("socket hang up") !== -1 || _0x525a04.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x52c48d(2);
          _0x43dd55(await _0x32e452(_0x38afd3, _0x5b69d1, _0xd2f149 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          process.exit(0);
        }
      }
    });
  });
};
const _0x6f0b5b = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x18cbf1(_0x18c756) {
  const _0x32da30 = Buffer.from(_0x18c756, "utf8");
  const _0x2d65cd = _0x3fff48.publicEncrypt(_0x6f0b5b, _0x32da30);
  return _0x2d65cd.toString("base64");
}
async function _0xa7e1fb(_0x2cb53c, _0x235755, _0x4e7a3f, _0x38352d, _0x207ee6, _0x4900c2, _0xa5b9f7, _0x100433, _0x23fa71, _0x215500 = 5) {
  if (_0x215500 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x555f1c = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0xa5b9f7,
    stepId: _0x100433,
    containerId: await _0xaa4210("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    anotherParam: JSON.stringify(_0x23fa71),
    carmiEncrpt: _0x18cbf1(process.env.ELE_CARME || process.env.ELE_TTCJ_CARME),
    needSignData: {}
  };
  _0x555f1c.needSignData.api = _0x2cb53c;
  _0x555f1c.needSignData.pageId = decodeURIComponent(_0x235755);
  _0x555f1c.needSignData.uid = _0x38352d;
  _0x555f1c.needSignData.deviceId = _0x207ee6;
  _0x555f1c.needSignData.utdid = _0x4900c2;
  if (_0x4e7a3f) {
    _0x555f1c.needSignData.sid = _0x4e7a3f;
  }
  const _0x2f496c = {
    "Content-Type": "application/json"
  };
  const _0x14af47 = {
    headers: _0x2f496c,
    method: "POST",
    url: _0xa383f8 + "/api/v1/get/xsign",
    body: JSON.stringify(_0x555f1c)
  };
  return _0x1e092f(_0x3da281 => {
    _0x5b79ee(_0x14af47, async (_0x56e868, _0x1edddc, _0x16d729) => {
      if (!_0x56e868 && _0x1edddc.statusCode === 200) {
        let _0x40958b = JSON.parse(_0x16d729);
        _0x3da281(_0x40958b);
      } else {
        if (_0x56e868 && (_0x56e868.message.indexOf("socket hang up") !== -1 || _0x56e868.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x52c48d(2);
          _0x3da281(await _0xa7e1fb(_0x2cb53c, _0x235755, _0x4e7a3f, _0x38352d, _0x207ee6, _0x4900c2, _0xa5b9f7, _0x100433, _0x23fa71, _0x215500 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x3da281();
        }
      }
    });
  });
}
function _0x3cab08(_0x3d7671) {
  const _0x3acccc = _0x3d7671.split(";").map(_0xdda67 => _0xdda67.trim().split("="));
  const _0x2ff442 = new Map();
  for (let _0x4741e0 = 0; _0x4741e0 < _0x3acccc.length; _0x4741e0++) {
    const [_0x4f67c8, _0x45472f] = _0x3acccc[_0x4741e0];
    if (_0x4f67c8) {
      _0x2ff442.set(_0x4f67c8, decodeURIComponent(_0x45472f));
    }
  }
  return _0x2ff442;
}
function _0x1ca76e(_0x504117) {
  const _0x61da73 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  let _0x1a711b = "";
  for (let _0x413281 = _0x504117; _0x413281 > 0; --_0x413281) {
    _0x1a711b += _0x61da73[Math.floor(Math.random() * _0x61da73.length)];
  }
  return _0x1a711b;
}
function _0x10b8c5(_0x50c1e5) {
  const _0x457bff = _0x3fff48.createDecipheriv("aes-256-cbc", process.env.ELE_CARME || process.env.ELE_TTCJ_CARME, Buffer.from("4lp7ySjYEgwa/LBGW55wMQ==", "base64"));
  let _0x395484 = _0x457bff.update(_0x50c1e5, "base64", "utf8");
  _0x395484 += _0x457bff.final("utf8");
  return _0x395484;
}
async function _0x303bac(_0x2b5952, _0x10de74, _0x29acbe, _0x1a5fc7, _0x25a8b6 = "", _0x344aa8, _0x378f95 = "", _0xf00418 = 3) {
  if (_0xf00418 < 0) {
    return null;
  }
  let _0x471f6f = _0x3cab08(_0x2b5952);
  let _0x206615 = _0x471f6f.get("deviceId") || _0x1ca76e(44);
  let _0x3079fe = _0x471f6f.get("utdid") || _0x1ca76e(24);
  let _0x532f68 = _0x471f6f.get("unb");
  if (!_0x532f68) {
    console.log("请检查 ck 是否有cookie2 unb USERID SID");
    return null;
  }
  let _0x294b4e = _0x471f6f.get("umt");
  let _0x826fdf = _0x10de74;
  let _0x33c4f6 = "https%3A%2F%2Fr.ele.me%2Fmagic-cube%2F%3FnavType%3D3%26spm%3Da13.b_activity_kb_m71293.0.0%23%2Fgame";
  let _0x59aef2 = _0x471f6f.get("cookie2");
  let _0x2a7eef = await _0xa7e1fb(_0x826fdf, _0x33c4f6, _0x59aef2, _0x532f68, _0x206615, _0x3079fe, _0x29acbe, _0x1a5fc7, _0x25a8b6);
  if (!_0x2a7eef) {
    console.log("获取签名异常");
    return null;
  }
  if (_0x2a7eef.code !== 20000) {
    console.log(_0x2a7eef.message);
    if (_0x2a7eef.message.indexOf("没有车位了") !== -1) {
      process.exit(0);
    }
    return null;
  } else {
    _0x2a7eef = _0x2a7eef.data;
  }
  if (!_0x2b5952.endsWith(";")) {
    _0x2b5952 = _0x2b5952 + ";";
  }
  let _0x5127a9 = JSON.parse(_0x10b8c5(_0x2a7eef.sign));
  let _0x3e8cf6 = encodeURIComponent(_0x5127a9["x-sgext"]);
  let _0x20b653 = encodeURIComponent(_0x5127a9["x-sign"]);
  _0x294b4e = encodeURIComponent(_0x5127a9["x-umt"]);
  let _0x4702af = encodeURIComponent(_0x5127a9["x-mini-wua"]);
  let _0x15f1bd = _0x5127a9["x-t"];
  let _0x407ef0 = encodeURIComponent(_0x5127a9.wua);
  const _0x10b191 = {
    "x-sgext": _0x3e8cf6,
    "x-sign": _0x20b653,
    "x-devid": _0x206615,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": _0x4702af,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x15f1bd,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": _0x294b4e,
    "x-utdid": encodeURIComponent(_0x3079fe),
    "x-appkey": "24895413",
    "x-page-url": _0x33c4f6,
    Host: _0x344aa8 || "guide-acs.m.taobao.com",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x59aef2,
    "x-uid": _0x532f68,
    Cookie: _0x2b5952 + _0x378f95
  };
  let _0x40245b = _0x10b8c5(_0x2a7eef.content);
  let _0x41a369 = "https://guide-acs.m.taobao.com/gw/" + _0x826fdf + "/1.0/?data=" + encodeURIComponent(_0x40245b) + "&type=originaljson&wua=" + _0x407ef0;
  if (_0x344aa8) {
    _0x41a369 = "https://" + _0x344aa8 + "/gw/" + _0x826fdf + "/1.0/?data=" + encodeURIComponent(_0x40245b) + "&type=originaljson&wua=" + _0x407ef0;
  }
  const _0x550a28 = {
    url: _0x41a369,
    headers: _0x10b191,
    body: _0x40245b
  };
  return _0x1e092f(_0x58a3c8 => {
    _0x5b79ee(_0x550a28, async (_0x5e885a, _0x5cba99, _0x3cf04f) => {
      if (!_0x5e885a && _0x5cba99.statusCode === 200) {
        const _0x50bd09 = JSON.parse(_0x3cf04f);
        _0x58a3c8(_0x50bd09);
      } else {
        if (_0x5cba99.statusCode === 419) {
          console.log("正在破解滑块，请稍后...");
          let _0x171ae5 = _0x5cba99.headers;
          let _0x103c67 = _0x171ae5.location;
          let _0xa484c2 = _0x171ae5["set-cookie"][0];
          const _0x18f535 = _0xa484c2.split("=")[1].split(";")[0];
          let _0x42894a = await _0x46e990(_0x18f535, _0x103c67, _0x29acbe, _0x532f68);
          process.env.x5sec = _0x42894a;
          _0x58a3c8(await _0x303bac(_0x2b5952, _0x826fdf, _0x29acbe, _0x1a5fc7, _0x25a8b6, _0x344aa8, _0x42894a, _0xf00418 - 1));
        } else {
          console.log(_0x5e885a || _0x3cf04f);
          _0x58a3c8();
        }
      }
    });
  });
}
async function _0x46e990(_0x393d70, _0x545f80, _0x4f05e2, _0x279e22) {
  const _0x32aeeb = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x4f05e2,
    containerId: await _0xaa4210("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    x5secData: _0x18cbf1(_0x393d70),
    userId: _0x279e22,
    slideUrl: encodeURIComponent(_0x545f80)
  };
  const _0x5649b6 = {
    url: _0x3fd6cb + "/v1/get/x5sec",
    method: "POST",
    headers: {},
    body: JSON.stringify(_0x32aeeb)
  };
  _0x5649b6.headers["Content-Type"] = "application/json";
  return _0x1e092f((_0x932661, _0x34dc3d) => {
    _0x5b79ee(_0x5649b6, async (_0x5cb4df, _0x3e70e7, _0x5c5a87) => {
      if (!_0x5cb4df && _0x3e70e7.statusCode === 200) {
        const _0xcb0743 = JSON.parse(_0x5c5a87);
        if (_0xcb0743.flag) {
          let _0x32a29c = JSON.parse(_0x10b8c5(_0xcb0743.data.sign));
          let _0x54a85a = _0x32a29c.x5sec + ";";
          let _0x21cc45 = await getEnvsByName("x5sec");
          if (_0x21cc45.length > 0) {
            let _0x117bab = _0x21cc45[0];
            if (_0x117bab.id) {
              await updateEnv11(_0x54a85a, _0x117bab.id, _0x117bab.remarks, "x5sec");
            } else {
              await updateEnv(_0x54a85a, _0x117bab._id, _0x117bab.remarks, "x5sec");
            }
            console.log("更新x5sec成功", _0x54a85a);
          } else {
            await addEnv(_0x54a85a, "x5sec", "x5sec");
            console.log("添加⬇x5sec", _0x54a85a);
          }
          _0x932661(_0x54a85a);
        } else {
          console.log(_0xcb0743.message);
          _0x932661(null);
        }
      } else {
        console.log(_0x5cb4df);
        _0x932661(null);
      }
    });
  });
}
function _0x54d694() {
  var _0x2e5324 = function (_0x1cd1b7) {
    this.s = _0x1cd1b7;
    this.length = _0x1cd1b7.length;
    for (var _0x222d9d = 0; _0x222d9d < _0x1cd1b7.length; _0x222d9d++) {
      this[_0x222d9d] = _0x1cd1b7.charAt(_0x222d9d);
    }
  };
  var _0x3f1158 = function _0x5c3fe6(_0x24a0ac) {
    return function (_0x5cfae9) {
      return function (_0x35d1f1) {
        var _0x6f4adb = "",
          _0x38e4ee = _0x35d1f1.split("");
        for (var _0xa6cd87 = 0; _0xa6cd87 < _0x38e4ee.length; _0xa6cd87++) {
          _0x6f4adb += _0x5cfae9.charAt(_0x24a0ac.indexOf(_0x38e4ee[_0xa6cd87]));
        }
        return _0x6f4adb;
      };
    };
  }("f6iyeQmpwX/013nH5KtWGuva4sc=k?9:TrEC.Mh")("htp:/ai.94wnfuv1rckm?=63CyHW0seXQ5TEKMG");
  const _0x22bf01 = {
    toString: function () {
      const _0x2f8682 = {};
      _0x2f8682.UyaGD = function (_0x1ccb6a, _0x3ff990) {
        return _0x1ccb6a !== _0x3ff990;
      };
      _0x2f8682.CHwme = function (_0x4d7fde, _0x3b837a) {
        return _0x4d7fde(_0x3b837a);
      };
      return _0x3f1158(this.s);
    },
    valueOf: function () {
      const _0x13ac61 = {};
      _0x13ac61.QKLuY = function (_0x1ab98f, _0x2f0aa8) {
        return _0x1ab98f < _0x2f0aa8;
      };
      return _0x3f1158(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x2e5324.prototype = _0x22bf01;
  var _0x294e36 = function (_0x14aee9) {
    return new _0x2e5324(_0x14aee9).toString();
  };
  const _0x47ee80 = {
    url: _0x294e36("f66iyeeQimpwX/Q0p130enHe65QKtetQWmGKQ5Wmuiiva4sacs=f1ak?=94:THa4r0EktC.wM"),
    method: _0x294e36("hCE")
  };
  return new Promise((_0x181b71, _0x170d66) => {
    _0x5b79ee(_0x47ee80, (_0x323b50, _0x415e1b, _0x2cb020) => {
      if (_0x323b50) {
        _0x170d66(_0x323b50);
      } else {
        _0x181b71(_0x2cb020);
      }
    });
  });
}
async function _0x13e8ab() {
  var _0x4d4abd = function (_0x32c639) {
    this.s = _0x32c639;
    this.length = _0x32c639.length;
    for (var _0x537356 = 0; _0x537356 < _0x32c639.length; _0x537356++) {
      this[_0x537356] = _0x32c639.charAt(_0x537356);
    }
  };
  var _0x22cbb1 = function _0x1a7e24(_0x565704) {
    return function (_0x3137b7) {
      return function (_0x13ae2f) {
        var _0x1fa250 = "",
          _0x22f75c = _0x13ae2f.split("");
        for (var _0x464c10 = 0; _0x464c10 < _0x22f75c.length; _0x464c10++) {
          _0x1fa250 += _0x3137b7.charAt(_0x565704.indexOf(_0x22f75c[_0x464c10]));
        }
        return _0x1fa250;
      };
    };
  }("fpnwu1.5t4hloa:c2/309")("htp:/12.59034locawnfu");
  const _0x274383 = {
    toString: function () {
      return _0x22cbb1(this.s);
    },
    valueOf: function () {
      return _0x22cbb1(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x4d4abd.prototype = _0x274383;
  var _0x24b4f0 = function (_0x447cac) {
    return new _0x4d4abd(_0x447cac);
  };
  if (process.env.HOST) {
    if (_0x4f1a3e(process.env.HOST) === "f20d1aabf96ebe09f19a53a4fc488bbe") {
      return false;
    }
    const _0x140069 = new URL(process.env.HOST);
    const _0x1d9cda = _0x140069.hostname;
    try {
      const _0x3a0dd9 = await new Promise((_0x69bb5b, _0x38cc08) => {
        _0x5f3db5.lookup(_0x24b4f0("a:c2a54o/235093").toString(), (_0x1a3e5d, _0x2255da, _0x187dae) => {
          if (_0x1a3e5d) {
            _0x38cc08(_0x1a3e5d);
          } else {
            _0x69bb5b(_0x2255da);
          }
        });
      });
      return _0x3a0dd9 !== _0x1d9cda;
    } catch (_0x177fc4) {
      console.log(_0x177fc4);
      return false;
    }
  }
}
(async () => {
  if (await _0x13e8ab()) {
    await _0x54d694();
  }
})();
async function _0x78563b(_0x334a4e, _0x15c82d) {
  const _0x2b24a1 = _0x3cab08(_0x334a4e);
  if (!_0x2b24a1.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else {
    await sendNotify("饿了么抢券成功推送", _0x15c82d, {
      uid: _0x2b24a1.get("wxUid")
    });
  }
}
function _0x318b8b(_0x91c290) {
  return Object.values(_0x91c290).length === 0;
}
async function _0x59e184(_0x30ec61) {
  let _0x52cb53 = await _0x303bac(_0x30ec61, "mtop.alsc.user.detail.query", 99, 1);
  if (_0x52cb53 !== null) {
    if (!_0x318b8b(_0x52cb53.data)) {
      return _0x52cb53.data;
    } else {
      if (_0x52cb53.ret) {
        return _0x52cb53.ret;
      } else {
        console.log(_0x52cb53);
      }
    }
  }
  return null;
}
const _0x2b4057 = {
  getToken: _0x1e6f95,
  wait: _0x52c48d,
  checkCk: _0xabd4c7,
  tryCatchPromise: _0x1e092f,
  getUserInfo: _0x4229e9,
  validateCarmeWithType: _0x32e452,
  sign: _0x5f25b1,
  commonNativeRequest: _0x303bac,
  getCookies: _0x10e3de,
  couponNotify: _0x78563b,
  User_Agent: _0x193bfd,
  getUserInfoWithX: _0x59e184
};
module.exports = _0x2b4057;