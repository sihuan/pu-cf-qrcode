import { favicon } from './favicon'

export function renderHTML(codestr, uid) {
    return `<!DOCTYPE html>
    <html lang="zh-cn">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Come and get PU QRcode</title>
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="${favicon}" />
	      <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
      </head>
      <style>
	      .qrcode-border {
	      	padding: 5% 5%;
	      	background: linear-gradient(to left, #ec5e42, #ec5e42) left top no-repeat,
	      		linear-gradient(to bottom, #ec5e42, #ec5e42) left top no-repeat,
	      		linear-gradient(to left, #ec5e42, #ec5e42) right top no-repeat,
	      		linear-gradient(to bottom, #ec5e42, #ec5e42) right top no-repeat,
	      		linear-gradient(to left, #ec5e42, #ec5e42) left bottom no-repeat,
	      		linear-gradient(to bottom, #ec5e42, #ec5e42) left bottom no-repeat,
	      		linear-gradient(to left, #ec5e42, #ec5e42) right bottom no-repeat,
	      		linear-gradient(to left, #ec5e42, #ec5e42) right bottom no-repeat;
	      	background-size: 5px 20px, 20px 5px, 5px 20px, 20px 5px;
	      }
      </style>
      <body>
        <div class="container-fluid" style="background-image: linear-gradient(#ffffff, #fadfd0,#ffffff);">
	      	<!-- 顶部标题栏 -->
	      	<div class="row-fluid" id="banner" style="height: 4em;margin-top: 3rem;">
	      		<div class="col-xs-4">
	      			<!-- 没找到合适的箭头 -->
	      		</div>
	      		<div class="col-xs-4" style="font-size: 1.6rem;">
	      			<center>我的二维码</center>
	      		</div>
	      		<div class="col-xs-4">
	      		</div>

	      	</div>
	      	<!-- /顶部标题栏 -->

	      	<!-- 中间卡片 -->
	      	<div class="row-fluid" id="card"
	      		style="height: 46rem; margin-top: 2rem;border: #d9e1e3 solid 0.0225rem; background-color: #ffffff; ">
	      		<div class="span12">
	      			<!-- 第一行字 -->
	      			<div class="row-fluid" style="margin-top: 2.5rem; font-size: 90%;">
	      				<div class="span4">
	      				</div>
	      				<div class="span4">
	      					<center>用于PU活动签到，关注TA人</center>
	      				</div>
	      				<div class="span4">
	      				</div>
	      			</div>
	      			<!-- /第一行字 -->

	      			<!-- 第二行字 -->
	      			<div class="row-fluid" style="margin-top: 0.7rem; font-size: 80%;">
	      				<div class="span4">
	      				</div>
	      				<div class="span4">
	      					<center>
	      						<div id="uid-prompt" style="color: #8d8d8d; display: inline-block;">我的UID为：</div>
	      						<div id="uid" style="display: inline-block; margin-left: -0.375rem;">${ uid }</div>
	      					</center>
	      				</div>
	      				<div class="span4">
	      				</div>
	      			</div>
	      			<!-- /第二行字 -->

	      			<!-- 二维码 -->
	      			<div class="row-fluid" style="height: 25rem;margin: 1.8rem 3.5375rem; ">
	      				<div class="span12">
	      					<div class="qrcode-border">
	      						<center>
	      							<div id="qrcode" class="span12">
	      								<!-- 这里是二维码本体 -->
	      							</div>
	      						</center>
	      					</div>
	      				</div>
	      			</div>
	      			<!-- /二维码 -->

	      			<!-- 时间提示 -->
	      			<div class="row-fluid" style="padding-top: 4%;">
	      				<div class="span12">
	      					<center>
	      						<div id="time-border"
	      							style="background-color: #f1f1f1; width: 60%; height: 3rem;border-radius: 2.425rem;  font-size: 1.1625rem; padding-top: 0.6rem; ">
	      							<div id="time-left" style="display: inline-block; color: #666666">
	      								二维码自动更新，有效时间
	      							</div>
	      							<div id="time-right" style="display: inline-block; color: #ec5e42;">
	      								25s
	      							</div>

	      						</div>
	      					</center>
	      				</div>
	      			</div>
	      			<!-- /时间提示 -->

	      			<!-- 打卡结果按钮 -->
	      			<div class="row-fluid"
	      				style="height: 3.9rem; margin: 0.725rem 1.3rem; background-color: #ec5e42; border-radius: 0.5rem; ">
	      				<div class="span12" style="color: white; padding-top: 2%; font-size: 110%;">
	      					<center>打卡结果</center>
	      				</div>
	      			</div>
	      			<!-- /打卡结果按钮 -->
	      		</div>
	      	</div>
	      	<!-- /中间卡片 -->

	      	<!-- 填充背景用空div -->
	      	<div style="height: 2.5rem; margin-top: 17.875rem;"></div>
	      	<!-- /填充背景用空div -->
	      </div>
      </body>
      <script>
	      var qrcode = new QRCode(document.getElementById("qrcode"), {
	      	text: "${ codestr }",
	      	height: 240,
	      	width: 240,
	      });
	      document.onclick = function (event) {
	      	if (document.fullscreenElement) {
	      		document.exitFullscreen()
	      	} else {
	      		document.documentElement.requestFullscreen()
	      	}
	      };
      </script>
    </html>`
  }
  