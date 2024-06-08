var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://qiu0908.github.io/cd2024/ \n 網誌: https://qiu0908.github.io/cd2024/blog \n 簡報:\xa0 https://qiu0908.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/QIU0908/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': '每週任務及相關步驟', 'text': '說明: 盡可能詳細描述每周任務所做的事情，並將每個步驟進行詳細說明。附上相關圖片或影片，並提供參考資料以供查證。 \n', 'tags': '', 'url': '每週任務及相關步驟.html'}, {'title': 'w1 個人 cd2024 倉儲的建立及維護', 'text': '\n 1. 個人 cd2024 倉儲 \n \n 2.建立方法\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 a.利用 此倉儲 作為 Template \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 b.新增一個名稱為 cd2024 的倉儲 \n 3.維護方法\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0a. 利用Codespaces\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 b.\xa0 git add . // git commit -m"\xa0 " // git push 等進行維護 \n \xa0 啟動動態 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0python3 main.py \n \n 4.設定 GitHub 帳號的雙重認證 \n \n 5.下載可攜套件檔案 \n \n ////////////////////////////////////////////////////////////////////////////////// \n 參考資料 \n \xa01. 協同產品設計實習2a-1 blog', 'tags': '', 'url': 'w1 個人 cd2024 倉儲的建立及維護.html'}, {'title': 'w2-1', 'text': '1.分組 並 創立分組倉儲: 為 mdecd2024 / 2a-midag2 的組員 \n \xa0 \xa0 \xa0步驟: \n \n 2.建立協同網站 \n \xa0 \xa0 組長:進入老師給的 \n 3.replit協同網站github \n', 'tags': '', 'url': 'w2-1.html'}, {'title': 'w3-1', 'text': '學習如何改blog \n 1.複製上一周blog \n 2.改Title Date Category Slug 內容 \n 3. ./gen_blog \n 4.git add . \n 5.git commit -m" " \n 6.git push \n', 'tags': '', 'url': 'w3-1.html'}, {'title': 'w4-1', 'text': '1. cd2024_2a_w2_5 如何利用近端可攜環境與外部 IPv4 開啟動態網站 的字幕 \n 2.其影片逐字稿 \n 3.為了上傳 影片 檔案 照片等 學習了blog寫法 \n \n 影片  及  逐字稿 \n', 'tags': '', 'url': 'w4-1.html'}, {'title': 'w5-1', 'text': '1.在分組倉儲的 w4 blog 新增自己的字評與影片 字幕 \n 2.下載 Siemens NX 1872 至個人隨身碟或電腦 \n', 'tags': '', 'url': 'w5-1.html'}, {'title': 'w6', 'text': 'update 了 組中自己的子模組 且學習如何用branch 協同更新 \n 方法如下: \n 1.在github main create new branch //branch name 我使用學號 41123119 \n 2.進入自己的branch \n 3.create a codspeace on 41123119 \n 4.open codspeace \n 5.chmod u+x init_replit ./init_replit \n 6.git submodule update --init //將 git submodule init 和 git submodule update 合併成一步 \n 7.cd 41123119 //進入41123119的子模組 \n 8.git pull origin main//從遠端更新程式碼 並將 main 合併至分支41123119 \n 9.cd ..//退到大廳 \n 10.git add . git commit git push \n 11.git merge//合併branch 41123119 至 main \n 12.在github確定沒衝突的合併後送出請求 \n 13.同意後即可 \n 14.合併後的branch 只要沒有與main有衝突的合併應該可以一直用 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '連假 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '1.一分鐘的影片報告 \n 2.把期中latex個人作業完成\xa0 latex txt 檔 \xa0 latex pdf 檔 \xa0 \n 3.整理之前的blog', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '1.把一分鐘的影片報告放到各分組網誌 \n  2.整理之前的blog \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '\n', 'tags': '', 'url': 'w10.html'}, {'title': '1.任務一', 'text': 'from browser import window, ajax, document, html\n  \ndef fetch_csv_data():\n  # CSV 檔案網址\n  url = "https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt"\n    \n  def on_complete(req):\n    if req.status == 200 or req.status == 0:\n      # 讀取 CSV 檔案內容\n      content = req.text\n    \n      # 依照換行符號拆分資料\n      lines = content.split(\'\\n\')\n    \n      # 建立空列表儲存資料\n      data = []\n    \n      # 遍歷每一行資料\n      for line in lines:\n        # 忽略空白行\n        if line.strip() == "":\n          continue\n    \n        # 依照逗號拆分資料\n        items = line.split(\',\')\n    \n        # 將拆分後的資料加入列表\n        data.append(items)\n        \n      # 必須去除 data 的第一列標題資料, 只取序號為 1 之後的資料\n      data = data[1:]\n    \n      # 取得 html 可以插入的標註位置\n      brython_div = document["brython_div1"]\n      course_title = "cd2024"\n  \n      # 逐一處理學員資料\n      index = 0\n      for items in data:\n        index += 1\n        student_id, github_username, group = items\n          \n        if github_username == "":\n          github_username = "000"\n          \n        # 建立網站和倉儲連結，使用正確的模板\n        site_url = f"https://{github_username}.github.io/{course_title}"\n        repo_url = f"https://github.com/{github_username}/{course_title}"\n        group_site_url = f"https://mdecd2024.github.io/2a-midag{group}"\n        group_repo_url = f"https://github.com/mdecd2024/2a-midag{group}"\n  \n        # 添加學號, 網站, 倉儲連結和序號到 brython_div\n        brython_div <= str(index) + ". " + html.A(student_id, href=site_url)\n        brython_div <= " ("\n        brython_div <= html.A("repo", href=repo_url)\n        brython_div <= ") | "\n        brython_div <= html.A("Group Site", href=group_site_url)\n        brython_div <= " | "\n        brython_div <= html.A("Group Repo", href=group_repo_url)\n        brython_div <= html.BR()\n  \n    else:\n      print("Error:", req.text)\n    \n  # 發送 AJAX 請求\n  req = ajax.ajax()\n  req.bind(\'complete\', on_complete)\n  req.open(\'GET\', url, True)\n  req.set_header(\'content-type\', \'application/x-www-form-urlencoded\')\n  req.send()\n    \n# 呼叫函式讀取 CSV 資料\nfetch_csv_data()\n \n \n', 'tags': '', 'url': '1.任務一.html'}, {'title': '2.任務二', 'text': '文章一\xa0 :\xa0 Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) \n 摘要內容 :\xa0 通過實施自動控制理論穩定動態系統時的局限性,\xa0 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. \n \n 文章二 :\xa0A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) \n 摘要內容 :\xa0 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體 。 \n \n 文章三 :\xa0 Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) \n 摘要內容 :\xa0 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 \n \n 文章四： Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） \n 摘要內容： 開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統 。 \n \n 文章五:\xa0Ball on the plate balancing control system (板上球平衡控制系統) \n 摘要內容 :\xa0平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 \n \n 文章六 :\xa02D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) \n 摘要內容 :\xa0使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 \n', 'tags': '', 'url': '2.任務二.html'}, {'title': '3.任務三', 'text': 'NX 平台零組件繪圖 \n 檔案zip \n \n', 'tags': '', 'url': '3.任務三.html'}, {'title': 'w11', 'text': '\n \n \n 1.平台繪圖完成  檔案 \n 2. 分組倉儲設為評分倉儲子模組 \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w15', 'text': '被分配到的任務 為 實現平衡台可動 \n 以下說明方法 \n step1.匯入組合stl \n \n step2. Edit > Shape groping / merging > divide // 分解組合圖 成零件圖 \n \n step3. Edit > Shape reference france > relocate mesh center // 零件原點從組合圖原點 改成 零件質量原點 \n \n step4. Add >Joint > Revolute // 新增joint 取代 圓桿位置 \n \n \n step5.Edit > Shape groping / merging > group // 分別把 頂部 及 基底 的小零件 組合成 group \n \n \n step6. 接著建立從屬關係 底板 > joint 1 > 頂板 > 2X{ motor 1. >長桿 1.>joint 2 }>接回 底板 \n \n \n \n \n step7.各部件屬性 如下 \n \n \n \n \n \n \n \n \n \n \n step8.加入球 \n \n step9.完成 \n \n \n \n \n 問題: \n 1.底座件 連到 頂板的部分 \n 解決: \n 1.複製 沒連到 零件 偏移 x 0.081 重新插入 底板零件 取代第一個底板位置 \n 就不用重畫了 \n', 'tags': '', 'url': 'w15.html'}, {'title': '每周心得或問題', 'text': '說明: 詳細記錄每周任務的心得體會，包括遇到的問題及其解決思路。 \n', 'tags': '', 'url': '每周心得或問題.html'}, {'title': 'w1', 'text': '第一周的課程内容 跟以前的課一樣先把環境建起來 。 但這次多了 引入codespaces和Replit進行版本控制，這次的環境建置不僅延續了之前課程的基礎，還增加了新的工具和方法，這使得整個開發流程更加靈活和高效。 \n \n Codespaces\xa0  Replit\xa0\xa0 可以在雲端運行，這樣可以隨時隨地開始工作，而不需要擔心硬碟的設置問題(單論網頁撰寫)。 \n \n 這些工具的使用，比起以往需要在本地機器上設置可攜環境和依賴外部IPv4來開設動態網站的方式，無疑提供了更大的便利性和可靠性。這樣的變化允許開發者專注於代碼和項目構建，而不是環境問題，這對於提高開發效率和項目質量都是非常有益的。 \n \n \n 三種 版本控制 工具 方便性 大到小 (單論網頁撰寫) \n \n Codespaces > Replit >可攜環境', 'tags': '', 'url': 'w1.html'}, {'title': 'w2-2', 'text': '', 'tags': '', 'url': 'w2-2.html'}, {'title': 'w3-2', 'text': '', 'tags': '', 'url': 'w3-2.html'}, {'title': 'w4-2', 'text': '', 'tags': '', 'url': 'w4-2.html'}, {'title': 'w5-2', 'text': '\n', 'tags': '', 'url': 'w5-2.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};