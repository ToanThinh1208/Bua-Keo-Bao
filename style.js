// tạo mảng chứa value và id của búa kéo bao
const VALUES = [
   {id: "scissors", value: "✌🏻"},
   {id: "rock", value: "✊🏻"},
   {id:"paper", value: "✋🏻"},
];
console.log(VALUES);

let i = 0
//làm hàm handleChange để cho nó chạy liên tục
const handleChange = () => {
    let computer = document.querySelector("#computer");
    computer.textContent = VALUES[i].value;
    computer.setAttribute("data-id", VALUES[i].id);
    if(i === (VALUES.length - 1)){
        i = 0;
    }else{

        i++;
    }
    //     i = i === VALUES.length - 1 ? 0 : ++i;
};
// }
    //truy cập vào #computer
    //thêm value cho máy
    //thêm data-id cho máy
    //làm i thay đổi liên tục

//dùng callback setInterVval đẻ cho máy chạy liên tục
let interval = setInterval(handleChange, (10));
//hàm compare: hàm so sánh giá trị phân thắng 1, thua -1, hòa 0
const compare = (valuePlayer, valueComputer) => {
    let indexPlayer = VALUES.findIndex((item) => item.id == valuePlayer);
    let indexComputer = VALUES.findIndex((item) => item.id == valueComputer);
    console.log(indexPlayer);
    
    let result = indexPlayer - indexComputer;
    if([1, -2].includes(result)) return 1;
    else if(result == 0) return 0;
    else return -1;
};
    //tìm vị trí của item có value.id của người và máy
    //kết quả  = index của người  - index của máy
    //trả 1 -1 0

//truy cập vào class user  = playerItem
let playerItem = document.querySelectorAll(".user");
//chạy từng thg trong playerItem:
playerItem.forEach((item) => {
    item.addEventListener("click", (event) => {
        clearInterval(interval);
        let computer = document.querySelector("#computer");
        let valueComputer = computer.dataset.id;
        let valuePlayer = event.target.id;
        let result = compare(valuePlayer, valueComputer);
        console.log(result);
        playerItem.forEach((_item) => {
            _item.classList.remove("actived");
            _item.style.pointerEvents = "none";
            // dell cho bấm nữa
        })
        event.target.classList.add("actived");

        let alertDiv = document.createElement("div");
        alertDiv.classList.add("alert");
        let msg = "";
        if(result == 1){
            msg = "Bạn thắng"
            alertDiv.classList.add("alert-success");
        }else if(result == 0){
            msg = "Bạn hòa"
            alertDiv.classList.add("alert-warning");
        }else{
            msg = "Bạn thua"
            alertDiv.classList.add("alert-dark");
        }
        alertDiv.textContent = msg;
        document.querySelector(".notification").appendChild(alertDiv);
        document.querySelector("#play-again").classList.remove("d-none");
    });
});
    //dừng máy lại
    //lấy data-id của máy
    //lấy id của thg vừa nhấn 
    //so sánh
    //duyệt các nút và xóa actived
    //thêm cái actived cho nút vừa nhấn
    //kết luận và thông báo
    //hiện nút chơi lại


//sự kiện click chơi lại
document.querySelector("#play-again").addEventListener("click", (event) => {
    clearInterval(interval);
    interval = setInterval(handleChange, 10);
    playerItem.forEach((item) => {
        item.classList.remove("actived");
        item.style.pointerEvents = "";
    })
    document.querySelector(".notification").innerHTML = "";
    document.querySelector("#play-again").classList.add("d-none");
});
    //khôi phục lại
    //xóa actived của các nút và khôi phục lại khả năng click
    //xóa thông báo và nút chơi lại
    //thêm lại thuộc tính d-none
