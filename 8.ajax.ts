interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}
function ajax(config: Config) {
  var xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  xhr.send(config.data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("成功");
      if (config.dataType == "json") {
        JSON.parse(xhr.responseText);
      } else {
        console.log(xhr.responseText);
      }
    }
  };
}
ajax({
  type: "get",
  url: "http:baidu.com",
  dataType: "json"
});
