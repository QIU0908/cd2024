var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/QIU0908/cd2024 網站: https://qiu0908.github.io/cd2024/ 簡報: https: //qiu0908.github.io/cd2024/reveal 網誌: https://qiu0908.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"41123119  w11","text":"2024 w11課程. 今完成事項 1.平台繪圖完成 檔案 2. 分組倉儲設為評分倉儲子模組","tags":"41123119 w11","url":"./41123119-w11.html"},{"title":"41123119  w10","text":"2024 w10課程. 今完成事項 1.把期中latax個人作業完成 latax txt 檔 latax pdf 檔 2.整理之前的blog 3.任務一 from browser import window, ajax, document, html def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 必須去除 data 的第一列標題資料, 只取序號為 1 之後的資料 data = data[1:] # 取得 html 可以插入的標註位置 brython_div = document[\"brython_div1\"] course_title = \"cd2024\" # 逐一處理學員資料 index = 0 for items in data: index += 1 student_id, github_username, group = items if github_username == \"\": github_username = \"000\" # 建立網站和倉儲連結，使用正確的模板 site_url = f\"https://{github_username}.github.io/{course_title}\" repo_url = f\"https://github.com/{github_username}/{course_title}\" group_site_url = f\"https://mdecd2024.github.io/2a-midag{group}\" group_repo_url = f\"https://github.com/mdecd2024/2a-midag{group}\" # 添加學號, 網站, 倉儲連結和序號到 brython_div brython_div <= str(index) + \". \" + html.A(student_id, href=site_url) brython_div <= \" (\" brython_div <= html.A(\"repo\", href=repo_url) brython_div <= \") | \" brython_div <= html.A(\"Group Site\", href=group_site_url) brython_div <= \" | \" brython_div <= html.A(\"Group Repo\", href=group_repo_url) brython_div <= html.BR() else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 4.任務二 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) 摘要內容 : 通過實施自動控制理論穩定動態系統時的局限性, 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) 摘要內容 : 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體 。 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) 摘要內容 : 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 文章四： Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） 摘要內容： 開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統 。 文章五: Ball on the plate balancing control system (板上球平衡控制系統) 摘要內容 : 平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) 摘要內容 : 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。","tags":"41123119 w10","url":"./41123119-w10.html"},{"title":"41123119  w9","text":"2024 w9課程. 今完成事項 1.把一分鐘的影片報告放到各分組網誌 2.整理之前的blog","tags":"41123119 w9","url":"./41123119-w9.html"},{"title":"41123119  w8","text":"2024 w8課程. 今完成事項 一分鐘的影片報告 影片","tags":"41123119 w8","url":"./41123119-w8.html"},{"title":"41123119  w7","text":"2024 w7課程. 連假","tags":"41123119 w7","url":"./41123119-w7.html"},{"title":"41123119  w6","text":"2024 w6課程. 今完成事項 update 了 組中自己的子模組 且學習如何用branch 協同更新 方法如下: 1.在github main create new branch //branch name 我使用學號 41123119 2.進入自己的branch 3.create a codspeace on 41123119 4.open codspeace 5.chmod u+x init_replit ./init_replit 6.git submodule update --init //將 git submodule init 和 git submodule update 合併成一步 7.cd 41123119 //進入41123119的子模組 8.git pull origin main//從遠端更新程式碼 並將 main 合併至分支41123119 9.cd ..//退到大廳 10.git add . git commit git push 11.git merge//合併branch 41123119 至 main 12.在github確定沒衝突的合併後送出請求 13.同意後即可 14.合併後的branch 只要沒有與main有衝突的合併應該可以一直用 問題 既然可以用從遠端更新子模組 那子模組可以更新回遠端嗎?","tags":"41123119 w6","url":"./41123119-w6.html"},{"title":"41123119  w5","text":"2024 w5課程. 今完成事項 1.在分組倉儲的 w4 blog 新增自己的字評與影片 字幕 2.下載 Siemens NX 1872 至個人隨身碟或電腦 影片 及 逐字稿","tags":"41123119 w5","url":"./41123119-w5.html"},{"title":"41123119  w4","text":"2024 w4課程. 今完成事項 1.cd2024_2a_w2_5 如何利用近端可攜環境與外部 IPv4 開啟動態網站的字幕 2.其影片逐字稿 3.為了上傳 影片 檔案 照片等 學習了blog寫法 影片 及 逐字稿","tags":"41123119 w4","url":"./41123119-w4.html"},{"title":"41123119  w3","text":"2024 w3課程. 今完成事項 學習如何改blog 1.複製上一周blog 2.改Title Date Category Slug 內容 3. ./gen_blog 4.git add . 5.git commit -m\" \" 6.git push","tags":"41123119 w3","url":"./41123119-w3.html"},{"title":"41123119  w2","text":"2024 w2課程. 今完成事項 1.分組 2.建立協同網站 3.replit協同網站github","tags":"41123119 w2","url":"./41123119-w2.html"},{"title":"41123119  w1","text":"2024 w1課程. 建立個人倉儲 任務:個人 cd2024 與分組倉儲的建立及維護. 1. 個人 cd2024 倉儲 2.分組 倉儲 3.建立方法 a.利用 此倉儲 作為 Template b.新增一個名稱為 cd2024 的倉儲 4.維護方法 a.利用Codespaces b.git add . // git commit // git push 等進行維護","tags":"41123119 w1","url":"./41123119-w1.html"}]};