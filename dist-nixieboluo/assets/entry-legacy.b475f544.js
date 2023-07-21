System.register(["./index-legacy.33b020d4.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.bD}],execute:function(){var r={backup:"Backup",restore:"Restore",start_backup:"Start backup",finish_backup:"Finish backup",success_backup_item:"[ {{item}} ] Backup was successful",failed_backup_item:"[ {{item}} ] Backup failed",no_file:"No file selected",start_restore:"Start restore",finish_restore:"Finish restore",success_restore_item:"[ {{item}} ] Restore was successful",failed_restore_item:"[ {{item}} ] Restore failed",override:"Override"},i={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",username:"Username"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:{paths:"Paths"},Aliyundrive:{internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},AliyundriveOpen:{client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload","rapid_upload-tips":"If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect",refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},AliyundriveShare:{order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},BaiduNetdisk:{client_id:"Client id",client_secret:"Client secret",custom_crack_ua:"Custom crack ua",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},BaiduPhoto:{album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},BaiduShare:{BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},Cloudreve:{address:"Address",cookie:"Cookie",password:"Password",root_folder_path:"Root folder path",username:"Username"},Dropbox:{client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",oauth_token_url:"Oauth token url",refresh_token:"Refresh token",root_folder_path:"Root folder path"},FTP:{address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},GoogleDrive:{chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},GooglePhoto:{client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:{baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},Local:{mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},MediaTrack:{access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},Mega_nz:{email:"Email",password:"Password"},MoPan:{cloud_id:"Cloud id",device_info:"Device info",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",phone:"Phone",root_folder_id:"Root folder id","root_folder_id-tips":"be careful when using the -11 value, some operations may cause system errors"},Onedrive:{chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},OnedriveAPP:{chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},PikPak:{disable_media_link:"Disable media link",password:"Password",root_folder_id:"Root folder id",username:"Username"},PikPakShare:{password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},Quark:{cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},S3:{access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},SFTP:{address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},SMB:{address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},Seafile:{address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},Teambition:{cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},Terabox:{cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},Thunder:{captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},ThunderExpert:{algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},Trainbit:{AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},UC:{cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},USS:{bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},UrlTree:{head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":"structure:FolderName:\n  [FileName:][FileSize:][Modified:]Url"},Virtual:{max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},WebDav:{address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},WoPan:{access_token:"Access token",family_id:"Family id","family_id-tips":"Keep it empty if you want to use your personal drive",refresh_token:"Refresh token",root_folder_id:"Root folder id",sort_rule:"Sort rule",sort_rules:{name_asc:"Name asc",name_desc:"Name desc",size_asc:"Size asc",size_desc:"Size desc",time_asc:"Time asc",time_desc:"Time desc"}},YandexDisk:{client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},config:{"115 Cloud":{},"123Pan":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:"There may be an infinite loop bug in this driver.\nDeprecated, no longer maintained and will be removed in a future version.\nWe recommend using the official driver AliyundriveOpen."},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},Dropbox:{},FTP:{},GoogleDrive:{},GooglePhoto:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"This network disk may store your password in clear text. Please set your password carefully"},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},Virtual:{},WebDav:{},WoPan:{},YandexDisk:{}},drivers:{"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",Cloudreve:"Cloudreve",Dropbox:"Dropbox",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",Virtual:"Virtual",WebDav:"WebDav",WoPan:"WoPan",YandexDisk:"YandexDisk"}},t={refresh:"Refresh",add:"Add",edit:"Edit",delete:"Delete",save:"Save",update:"Update",copied:"Copied",delete_success:"Deleted successfully",save_success:"Saved successfully",update_success:"Updated successfully",choose:"Choose",confirm:"Confirm",cancel:"Cancel",delete_confirm:"Are you sure you want to delete [{{name}}]?",operations:"Operations",yes:"Yes",no:"No",clear:"Clear",choose_folder:"Select folder",choose_or_input_path:"Select folder or input path",disable:"Disable",enable:"Enable",ok:"OK",back:"Back",have_account:"Have an account?",go_login:"Go to login",close:"Close",no_support_now:"Not currently supported",empty_input:"Please enter"},a={obj:{name:"Name",size:"Size",modified:"Modified"},preview:{download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing",open_in_new_window:"Open in new window",auto_next:"Auto next"},layouts:{list:"List View",grid:"Grid View",image:"Image View"},no_images:"No images in the current folder",load_more:"Load more",no_more:"No more",input_password:"Please input password",toolbar:{more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",batch_rename:"Batch Rename",regex_rename:"Regex Rename",sequential_renaming:"Sequential Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line.",sequential_renaming_desc:"The new file name will have a numerical starting value appended to it, and it will be displayed sequentially by adding 1 to the starting value. Enter the new file name on the first line and the starting value on the second line."},upload:{add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},local_settings:{aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},package_download:{current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},footer:{powered_by:"Powered by AList",manage:"Manage"},search:{search:"Search",no_result:"No result yet"},fetching_settings_failed:"Failed fetching settings: ",get_current_user_failed:"Failed get current user: ","Loading storage, please wait":"Loading storage, please wait"},s={search_index:"Search index",current:"Current indexes",build:"Build indexes",rebuild:"Rebuild indexes",paths_to_update:"Paths to update",max_depth:"Max depth",update:"Update indexes",obj_count:"Object count",last_done_time:"Last done time",unknown:"Unknown",stop:"Stop",clear:"Clear",error:"Error"},n={login_to:"Login to the","username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:"Remember me",forget:"Forget password?",forget_url:"https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",clear:"Clear",login:"Login",use_guest:"Browse as a guest",success:"Login successfully"},d={sidemenu:{dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",qbit:"qBittorrent",docs:"Documentation"},title:"AList Manage",not_admin:"You are not admin user, please login with admin account.",logout_success:"Logout successfully",send:"Send",receive:"Receive",received_msgs:"Received messages","add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},l={path:"Path",password:"Password",write:"Write",hide:"Hide",readme:"Readme",apply_sub:"Apply to sub folder",hide_help:"One regular expression per line",readme_help:"Support markdown content or markdown link"},c={allow_indexed:"Allow indexed",allow_mounted:"Allow mounted",announcement:"Announcement",aria2_secret:"Aria2 secret",aria2_uri:"Aria2 uri",audio_autoplay:"Audio autoplay",audio_cover:"Audio cover",audio_types:"Audio types",auto_update_index:"Auto update index",customize_body:"Customize body",customize_head:"Customize head",default_page_size:"Default page size",external_previews:"External previews",favicon:"Favicon",filename_char_mapping:"Filename char mapping",forward_direct_link_params:"Forward direct link params",hide_files:"Hide files",home_container:"Home container",home_containers:{hope_container:"Hope container",max_980px:"Max 980px"},home_icon:"Home icon",iframe_previews:"Iframe previews",ignore_paths:"Ignore paths","ignore_paths-tips":"one path per line",image_types:"Image types",index_progress:"Index progress",link_expiration:"Link expiration",logo:"Logo",main_color:"Main color",max_index_depth:"Max index depth","max_index_depth-tips":"max depth of index",ocr_api:"Ocr api",package_download:"Package download",pagination_type:"Pagination type",pagination_types:{all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},privacy_regs:"Privacy regs",proxy_ignore_headers:"Proxy ignore headers",proxy_types:"Proxy types",qbittorrent_seedtime:"Qbittorrent seedtime",qbittorrent_url:"Qbittorrent url",robots_txt:"Robots txt",search_index:"Search index",search_indexs:{bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},settings_layout:"Settings layout",settings_layouts:{list:"List",responsive:"Responsive"},sign_all:"Sign all",site_title:"Site title",sso_application_name:"Sso application name",sso_client_id:"Sso client id",sso_client_secret:"Sso client secret",sso_endpoint_name:"Sso endpoint name",sso_jwt_public_key:"Sso jwt public key",sso_login_enabled:"Sso login enabled",sso_login_platform:"Sso login platform",sso_login_platforms:{Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},sso_organization_name:"Sso organization name",text_types:"Text types",token:"Token",version:"Version",video_autoplay:"Video autoplay",video_types:"Video types"},_={aria2:"Aria2",aria2_version:"Aria2 Version:",set_aria2:"Set aria2",copy_token:"Copy Token",reset_token:"Reset Token",reset_token_success:"Reset Token Successfully",unknown_type:"Unknown type",set_qbit:"Set qBittorrent",qbittorrent:"qBittorrent"},p={common:{mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},other:{start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver"}},u={aria2_down:"Download file to local machine",aria2_transfer:"Transfer downloaded file to corresponding storage",qbit_down:"Download file to local machine",qbit_transfer:"Transfer downloaded file to corresponding storage",upload:"Upload file to corresponding storage",copy:"Copy file from a storage to another storage",done:"Completed",undone:"Running",pending:"Pending",running:"Running",canceling:"Canceling",succeeded:"Succeeded",canceled:"Canceled",errored:"Errored",clear_succeeded:"Clear Succeeded",retry:"Retry"},h={permissions:{see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},username:"Username",password:"Password",base_path:"Base path",role:"Role",permission:"Permission",disabled:"Disabled",available:"Available",update_profile:"Update Profile",update_profile_success:"Update profile successfully, please re-login.",change_username:"Change Username",change_password:"Change Password","change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:"Enable 2FA",cancel_2fa:"Cancel 2FA",cancel_2fa_success:"Cancel 2FA successfully","2fa_already_enabled":"2FA is already enabled",scan_qr:"Scan the QR code to save the secret key",or_manual:"Or input the secret key manually",input_code:"Input the code of your 2FA app",verify:"Verify","guest-tips":"You are currently visiting as a guest.",modify_nothing:"So you cannot modify anything in the manage page.",sso_login:"Single sign-on Login",connect_sso:"Connect Single sign-on Platform",disconnect_sso:"Disconnect Single sign-on Platform"},m=Object.assign({"./br.json":r,"./drivers.json":i,"./global.json":t,"./home.json":a,"./index.json":o,"./indexes.json":s,"./login.json":n,"./manage.json":d,"./metas.json":l,"./settings.json":c,"./settings_other.json":_,"./storages.json":p,"./tasks.json":u,"./users.json":h}),f=e("default",{});for(var g in m)f[g.split("/")[1].split(".")[0]]=m[g]}}}));
