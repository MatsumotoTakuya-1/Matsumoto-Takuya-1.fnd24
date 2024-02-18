let vehicle1 = {
    name: "ハイエースワゴン",
    emptyWeight: "2040",
    GVM: "2590",
    centerOfGravityHeight: "800",//仮値
    wheelBase: "2570",
    vehicleWidth: "1880",
    frontAxleWeight: "1590",
    rearAxleWeight: "1000",
    tireDynamicLoadRadius: "340"//仮値
};

let vehicle2 = {
    name: "グランエース",
    emptyWeight: "2740",
    GVM: "3070",
    centerOfGravityHeight: "800",//仮値
    wheelBase: "3210",
    vehicleWidth: "1970",
    frontAxleWeight: "1870",
    rearAxleWeight: "1200",
    tireDynamicLoadRadius: "340"//仮値
};

let vehicle3 = {
    name: "コースタ",
    emptyWeight: "3730",
    GVM: "5050",
    centerOfGravityHeight: "700", //仮値
    wheelBase: "3935",
    vehicleWidth: "2080",
    frontAxleWeight: "3050",
    rearAxleWeight: "2000",
    tireDynamicLoadRadius: "360" //仮値
};

let vehicle4 = {
    name: "シエンタ",
    emptyWeight: "1370",
    GVM: "1755",
    centerOfGravityHeight: "650",//仮値
    wheelBase: "2750",
    vehicleWidth: "1695",
    frontAxleWeight: "1000",
    rearAxleWeight: "755",
    tireDynamicLoadRadius: "320"//仮値
};

let vehicle5 = {
    name: "ノア",
    emptyWeight: "1670",
    GVM: "2055",
    centerOfGravityHeight: "700",//仮値
    wheelBase: "2850",
    vehicleWidth: "1730",
    frontAxleWeight: "1155",
    rearAxleWeight: "900",
    tireDynamicLoadRadius: "360"//仮値
};

let vehicle6 = {
    name: "アルファード",
    emptyWeight: "2230",
    GVM: "2615",
    centerOfGravityHeight: "750",//仮値
    wheelBase: "3000",
    vehicleWidth: "1850",
    frontAxleWeight: "1615",
    rearAxleWeight: "1000",
    tireDynamicLoadRadius: "370"//仮値
};

let FrCaliper15 = {
    種類: "FrCaliper15",
    シリンダーサイズ: 45,
    シリンダー面積: Math.PI / 4 * 45 ** 2,
    制動有効半径: 200
};

let FrCaliper16 = {
    種類: "FrCaliper16",
    シリンダーサイズ: 48,
    シリンダー面積: Math.PI / 4 * 48 ** 2,
    制動有効半径: 210
};

let FrCaliper17 = {
    種類: "FrCaliper17",
    シリンダーサイズ: 51,
    シリンダー面積: Math.PI / 4 * 51 ** 2,
    制動有効半径: 220
};

let RrCaliper15 = {
    種類: "RrCaliper15",
    シリンダーサイズ: 45,
    シリンダー面積: Math.PI / 4 * 45 ** 2,
    制動有効半径: 180
};

let RrCaliper16 = {
    種類: "RrCaliper16",
    シリンダーサイズ: 48,
    シリンダー面積: Math.PI / 4 * 48 ** 2,
    制動有効半径: 190
};

let RrCaliper17 = {
    種類: "RrCaliper17",
    シリンダーサイズ: 51,
    シリンダー面積: Math.PI / 4 * 51 ** 2,
    制動有効半径: 200
};

let pad1 = {
    パッド名: "Frパッド1",
    BEF: "0.6"
};

let pad2 = {
    パッド名: "Frパッド2",
    BEF: "0.7"
};

let pad3 = {
    パッド名: "Frパッド3",
    BEF: "0.8"
};

let pad4 = {
    パッド名: "Rrパッド1",
    BEF: "0.35"
};

let pad5 = {
    パッド名: "Rrパッド2",
    BEF: "0.40"
};

let pad6 = {
    パッド名: "Rrパッド3",
    BEF: "0.45"
};

// 車両の配列を定義
const vehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5, vehicle6];
// ブレーキ部品の配列を定義
const FrCalipers = [FrCaliper15, FrCaliper16, FrCaliper17];
const RrCalipers = [RrCaliper15, RrCaliper16, RrCaliper17];
const FrPads = [pad1, pad2, pad3];
const RrPads = [pad4, pad5, pad6];


//車両をプルダウンで選択
function showVehicleInfoFromSelection() {
    let vehicleIndex = document.getElementById("vehicleSelect").value; //選択した車両の設定したvalueを返す。ここではvehiclesのインデックス番号を返す
    let vehicle = vehicles[vehicleIndex]; //選択した車両の情報をvehicleに代入
    let info = document.getElementById("vehicleInfo"); //id:vehicleInfoに情報表示させるためinfoに代入
    if (vehicle) {
        info.innerHTML = `<table class="design">
            <tr>
            <th>車両名</th>
            <th>空車重量[kg]</th>
            <th>GVM[kg]</th>
            <th>Fr軸重[kg]</th>
            <th>Rr軸重[kg]</th>
            <th>重心高[mm]</th>
            <th>ホイールベース[mm]</th>
            <th>タイヤ動荷重半径[mm]</th></tr>
            <tr>
            <td>${vehicle.name}</td>
            <td>${vehicle.emptyWeight}</td>
            <td>${vehicle.GVM}</td>
            <td>${vehicle.frontAxleWeight}</td>
            <td>${vehicle.rearAxleWeight}</td>
            <td>${vehicle.centerOfGravityHeight}</td>
            <td>${vehicle.wheelBase}</td>
            <td>${vehicle.tireDynamicLoadRadius}</td>
            </tr>
            </table>`;
    } else {
        info.innerHTML = "<p>車両の情報を選択してください。</p>";
    }
}

//Frキャリパをプルダウンで選択
function showFrCaliperInfoFromSelection() {
    let frCaliperIndex = document.getElementById("FrCaliperSelect").value;
    let frCaliper = FrCalipers[frCaliperIndex];
    let info = document.getElementById("FrCaliperInfo");
    if (frCaliper) {
        info.innerHTML = `<table class="design">
            <tr>
            <th>キャリパ種類</th>
            <th>シリンダーサイズ[mm]</th>
            <th>シリンダー面積[mm2]</th>
            <th>制動有効半径[mm]</th>
            </tr>
            <td>${frCaliper.種類}</td>
            <td>${frCaliper.シリンダーサイズ}</td>
            <td>${frCaliper.シリンダー面積.toFixed(2)}</td>
            <td>${frCaliper.制動有効半径}</td>
            </tr>
            </table>`;
    } else {
        info.innerHTML = "<p>Frキャリパの情報を選択してください。</p>";
    }
}

//Rrキャリパをプルダウンで選択
function showRrCaliperInfoFromSelection() {
    let rrCaliperIndex = document.getElementById("RrCaliperSelect").value;
    let rrCaliper = RrCalipers[rrCaliperIndex];
    let info = document.getElementById("RrCaliperInfo");
    if (rrCaliper) {
        info.innerHTML = `<table class="design">
            <tr>
            <th>キャリパ種類</th>
            <th>シリンダーサイズ[mm]</th>
            <th>シリンダー面積[mm2]</th>
            <th>制動有効半径[mm]</th>
            </tr>
            <td>${rrCaliper.種類}</td>
            <td>${rrCaliper.シリンダーサイズ}</td>
            <td>${rrCaliper.シリンダー面積.toFixed(2)}</td>
            <td>${rrCaliper.制動有効半径}</td>
            </tr>
            </table>`;
    } else {
        info.innerHTML = "<p>Rrキャリパの情報を選択してください。</p>";
    }
}

//Frパッドをプルダウンで選択
function showPadInfoFromSelection() {
    let frPadIndex = document.getElementById("FrPadSelect").value;
    let frPad = FrPads[frPadIndex]
    let info = document.getElementById("FrPadInfo");
    if (frPad) {
        info.innerHTML = `<table class="design">
        <tr>
        <th>パッド名</th>
        <th>BEF(=2μ)</th>
        </tr>
        <td>${frPad.パッド名}</td>
        <td>${frPad.BEF}</td>
        </tr>
        </table>`;
    } else {
        info.innerHTML = "<p>パッドの情報を選択してください。</p>";
    }
}

//Rrパッドをプルダウンで選択
function showPadInfoFromSelectionRr() {
    let rrPadIndex = document.getElementById("RrPadSelect").value;
    let rrPad = RrPads[rrPadIndex]
    let info = document.getElementById("RrPadInfo");
    if (rrPad) {
        info.innerHTML = `<table class="design">
        <tr>
        <th>パッド名</th>
        <th>BEF(=2μ)</th>
        </tr>
        <td>${rrPad.パッド名}</td>
        <td>${rrPad.BEF}</td>
        </tr>
        </table>`;
    } else {
        info.innerHTML = "<p>パッドの情報を選択してください。</p>";
    }
}

// 理想制動力を計算
function calculateIdealBrakingForce() {
    let vehicleIndex = document.getElementById("vehicleSelect").value; //選択した車両の設定したvalueを返す。ここではvehiclesのインデックス番号を返す
    let vehicle = vehicles[vehicleIndex]; //選択した車両をvehicleに代入;
    if (!vehicle) {
        document.getElementById('idealBrakingForceResult').innerHTML = "<p>車両を選択してください。</p>"
    }

    let FrBrakingForces = [];
    let RrBrakingForces = [];
    for (let mu = 0; mu <= 1; mu += 0.1) {
        let FrBrakingForce = (mu * 9.8 * (parseFloat(vehicle.frontAxleWeight) + mu * parseFloat(vehicle.GVM) * parseFloat(vehicle.centerOfGravityHeight) / parseFloat(vehicle.wheelBase))).toFixed(2);
        let RrBrakingForce = (mu * 9.8 * (parseFloat(vehicle.rearAxleWeight) - mu * parseFloat(vehicle.GVM) * parseFloat(vehicle.centerOfGravityHeight) / parseFloat(vehicle.wheelBase))).toFixed(2);
        FrBrakingForces.push(FrBrakingForce);
        RrBrakingForces.push(RrBrakingForce);
    }

    let resultHTML = "<h3>理想制動力 計算結果</h3>";
    resultHTML += "<table class='design'><tr><th>μ</th>";
    for (let i = 0; i <= 10; i++) {
        resultHTML += "<th>" + (0.1 * i).toFixed(1) + "</th>";
    }
    resultHTML += "</tr><tr><td>Fr理想制動力 (N)</td>";
    for (let i = 0; i < FrBrakingForces.length; i++) {
        resultHTML += "<td>" + FrBrakingForces[i] + "</td>";
    }
    resultHTML += "</tr><tr><td>Rr理想制動力 (N)</td>";
    for (let i = 0; i < RrBrakingForces.length; i++) {
        resultHTML += "<td>" + RrBrakingForces[i] + "</td>";
    }
    resultHTML += "</tr></table>";
    document.getElementById('idealBrakingForceResult').innerHTML = resultHTML;

    return { FrBrakingForces, RrBrakingForces };
}



// 実制動力を計算
function calculateActualBrakingForce() {
    let vehicle = vehicles[document.getElementById("vehicleSelect").value];
    let frCaliper = FrCalipers[document.getElementById("FrCaliperSelect").value];
    let rrCaliper = RrCalipers[document.getElementById("RrCaliperSelect").value];
    let frPad = FrPads[document.getElementById("FrPadSelect").value];
    let rrPad = RrPads[document.getElementById("RrPadSelect").value];

    
    if (!vehicle) {
        document.getElementById('actualBrakingForceResult').innerHTML = "<p>車両を選択してください。</p>";
        return;
    }
    let dynamicLoadRadius = parseFloat(vehicle.tireDynamicLoadRadius);

    
    if (!frCaliper) {
        document.getElementById('actualBrakingForceResult').innerHTML = "<p>Frキャリパを選択してください。</p>";
        return;
    }
    let FrCylinderArea = parseFloat(frCaliper.シリンダー面積);
    let FrEffectiveBrakingRadius = parseFloat(frCaliper.制動有効半径);

    
    if (!rrCaliper) {
        document.getElementById('actualBrakingForceResult').innerHTML = "<p>Rrキャリパを選択してください。</p>";
        return;
    }
    let RrCylinderArea = parseFloat(rrCaliper.シリンダー面積);
    let RrEffectiveBrakingRadius = parseFloat(rrCaliper.制動有効半径);

    
    if (!frPad) {
        document.getElementById('actualBrakingForceResult').innerHTML = "<p>Frパッドを選択してください。</p>";
        return;
    }
    let FrBEF = parseFloat(frPad.BEF);

    
    if (!rrPad) {
        document.getElementById('actualBrakingForceResult').innerHTML = "<p>Rrパッドを選択してください。</p>";
        return;
    }
    let RrBEF = parseFloat(rrPad.BEF);


    let FrActualBrakingForces = [];
    let RrActualBrakingForces = [];
    for (let p = 0; p <= 8; p++) {
        let FrForce = (2 * FrBEF * p * FrCylinderArea * FrEffectiveBrakingRadius / dynamicLoadRadius).toFixed(2);
        let RrForce = (2 * RrBEF * p * RrCylinderArea * RrEffectiveBrakingRadius / dynamicLoadRadius).toFixed(2);
        FrActualBrakingForces.push(FrForce);
        RrActualBrakingForces.push(RrForce);
    }



    let resultHTML = "<h3>実制動力 計算結果</h3>";
    resultHTML += "<table class='design'><tr><th>液圧[MPa]</th>";
    for (let i = 0; i <= 8; i++) {
        resultHTML += "<th>" + (i).toFixed(1) + "</th>";
    }
    resultHTML += "</tr><tr><td>Fr実制動力 (N)</td>";
    for (let i = 0; i < FrActualBrakingForces.length; i++) {
        resultHTML += "<td>" + FrActualBrakingForces[i] + "</td>";
    }
    resultHTML += "</tr><tr><td>Rr実制動力 (N)</td>";
    for (let i = 0; i < RrActualBrakingForces.length; i++) {
        resultHTML += "<td>" + RrActualBrakingForces[i] + "</td>";
    }
    resultHTML += "</tr></table>";
    document.getElementById('actualBrakingForceResult').innerHTML = resultHTML;
    return { FrActualBrakingForces, RrActualBrakingForces };
}


//グラフを書く
// グラフの表示状態を切り替える関数
function toggleGraphVisibility() {
    let graphContainer = document.getElementById("graphContainer");
    // グラフコンテナの表示状態をチェック
    if (graphContainer.style.display === "none") {
        graphContainer.style.display = "block"; // グラフを表示
        // 理想制動力と実制動力の計算結果を取得
        let idealForces = calculateIdealBrakingForce();
        let actualForces = calculateActualBrakingForce();
        // 取得した計算結果をグラフ描画関数に渡す
        drawGraph(idealForces.FrBrakingForces, idealForces.RrBrakingForces, actualForces.FrActualBrakingForces, actualForces.RrActualBrakingForces);
    } else {
        graphContainer.style.display = "none"; // グラフを非表示
    }
}

// グラフを描画する関数
function drawGraph(FrBrakingForces, RrBrakingForces, FrActualBrakingForces, RrActualBrakingForces) {
    let ctx = document.getElementById("myLineChart"); // キャンバス要素を取得
    let myLineChart = new Chart(ctx, {
        type: 'scatter', // グラフのタイプを散布図に設定
        data: {
            datasets: [
                {
                    label: '理想制動力', // データセットのラベル
                    data: FrBrakingForces.map((value, index) => ({ x: value, y: RrBrakingForces[index] })), // 理想制動力のデータ
                    borderColor: "rgba(0,0,255,1)", // 線の色
                    backgroundColor: "rgba(0,0,255,0.1)", // 背景色
                    fill: false, // 塗りつぶし無し
                    showLine: true, // 線を表示
                    pointRadius: 5 // ポイントの半径
                },
                {
                    label: '実制動力', // データセットのラベル
                    data: FrActualBrakingForces.map((value, index) => ({ x: value, y: RrActualBrakingForces[index] })), // 実制動力のデータ
                    borderColor: "rgba(255,0,0,1)", // 線の色
                    backgroundColor: "rgba(0,0,0,0)", // 背景色
                    fill: false, // 塗りつぶし無し
                    showLine: true, // 線を表示
                    pointRadius: 5 // ポイントの半径
                }
            ],
        },
        options: {
            responsive: true, // レスポンシブ対応
            maintainAspectRatio: false, // アスペクト比を維持しない
            title: {
                display: true, // タイトルを表示
                text: '制動力の関係（Fr制動力とRr制動力の比較）' // タイトルテキスト
            },
            scales: {
                yAxes: [{
                    type: 'linear', // 線形スケール
                    position: 'left', // 左側に表示
                    ticks: {
                        beginAtZero: true, // 0から開始
                        suggestedMax: 10000, // 最大値の提案
                        stepSize: 1000, // ステップサイズ
                        callback: function (value) {
                            return value + 'N' // ラベルのフォーマット
                        }
                    }
                }],
                xAxes: [{
                    type: 'linear', // 線形スケール
                    position: 'bottom', // 下側に表示
                    scaleLabel: {
                        display: true, // スケールラベルを表示
                        labelString: '制動力(N)' // ラベルテキスト
                    },
                    ticks: {
                        beginAtZero: true, // 0から開始
                        suggestedMax: 10000, // 最大値の提案
                        stepSize: 1000, // ステップサイズ
                        autoSkip: true, // 自動スキップ
                        maxTicksLimit: 11 // ティックの最大数
                    }
                }]
            },
            aspectRatio: 1, // アスペクト比
        }
    });
}
