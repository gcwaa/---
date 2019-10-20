room = game.createRoom("room","배경-5.png")//방 1 생성
room2=game.createRoom("room2","배경-5.png")//방 2 생성
hallway=game.createRoom("hallway","hallway.png")//복도 생성
dining1=game.createRoom("dining1","배경-1.png")//거실1 생성
dining2=game.createRoom("dining2","배경-1-1.png")//거실 2 생성
dining3=game.createRoom("dining3","배경-2.png")//거실 3 생성
dining4=game.createRoom("dining4","배경-1-1.png")//거실 4 생성
garden1=game.createRoom("garden1","정원.png")//정원1 생성
garden2=game.createRoom("garden2","정원2.png")//정원2 생성
base1=game.createRoom("base1","지하배경1.png")//지하실 1 생서
base2=game.createRoom("base2","지하배경2.png")//지하실 2생성
mirror=game.createRoom("mirror","거울속.png")//거울 안쪽 생성


//-----------------------------------------------------------------
//방1 오브젝트 배치
room.carpet = room.createObject("carpet","카펫-1.png")
room.carpet.setWidth(1000)

room.locateObject(room.carpet,550,500)
//카펫 생성
room.bed = room.createObject("bed","침대-2.png")
room.bed.setWidth(600)
room.locateObject(room.bed,640,420)
//침대 생성
room.knife = room.createObject("knife","knife.png")
room.knife.setWidth(100)
room.locateObject(room.knife,650,480)
room.knife.hide()
//칼 생성
room.teddybear = room.createObject("teddybear","bear1.png")
room.teddybear.setWidth(170)
room.locateObject(room.teddybear,640,430)
//곰인형 생성
room.door = room.createObject("door","문2-좌-닫힘.png")
room.door.setWidth(136)
room.locateObject(room.door,150,330)
room.door.lock()
//문 생성
room.cabent = room.createObject("cabent","찬장-오른쪽-닫힘.png")
room.cabent.setWidth(200)
room.locateObject(room.cabent,1000,200)
//찬장 생성
room.postit = room.createObject("postit","포스트잇.png")
room.postit.setWidth(20)
room.locateObject(room.postit,1000,200)
room.postit.hide()
//포스트잇 생성
room.diary = room.createObject("diary","diary.png")
room.diary.setWidth(50)
room.locateObject(room.diary,970,250)
room.diary.hide()
//일기장 생성
room.plant = room.createObject("plant","식물1.png")
room.plant.setWidth(100)
room.locateObject(room.plant,30,450)
//식물 생성
room.keypad = room.createObject("keypad","숫자키-좌.png")
room.keypad.setWidth(80)
room.locateObject(room.keypad,300,300)
//키패드 생성
room.key = room.createObject("key","열쇠.png")
room.key.setWidth(50)
room.locateObject(room.key,600,360)
room.key.hide()
//키 생성
room.chest = room.createObject("chest","chest-close.png")
room.chest.setWidth(100)
room.locateObject(room.chest,1000,560)
//상자 생성
room.postit2 = room.createObject("postit2","포스트잇.png")
room.postit2.setWidth(40)
room.locateObject(room.postit2,1020,550)
room.postit2.hide()

//---------------------------------------------------------------------------------
//방 1 함수 생성




room.cabent.onClick = function(){
    if(room.cabent.isOpened()){
        room.cabent.close()
    }else if(room.cabent.isClosed()){
        room.cabent.open()
    }else{}
}//찬장 클릭시 모션

room.cabent.onOpen = function(){
    room.cabent.setSprite("찬장-오른쪽-열림.png")
room.diary.show()
room.postit.show()
}

room.cabent.onClose = function(){
    room.cabent.setSprite("찬장-오른쪽-닫힘.png")
    room.diary.hide()
    room.postit.hide()
}//숨겨진 일기장과 포스트잇 보여주기
room.postit.onClick = function(){
    showImageViewer("포스트잇2.png");
    printMessage("이게 무슨 의미일까..??")
}//포스트잇 클릭하면 자세히 보여줌
room.diary.onClick = function(){
    showImageViewer("일기장1.png");
    printMessage("이곳에 살던 사람의 일기장일까...?")
}//일기장을 클릭하면 자세히 보여줌

room.plant.onClick = function(){
    printMessage("화분이 굉장히 시들어 보인다...")
}//화분 클릭시

room.teddybear.move=true
room.teddybear.onDrag=function(direction){
if(direction == "Left" && room.teddybear.move){
    room.teddybear.moveX(-40)
    room.teddybear.moveY(-70)
    room.teddybear.move = false
    room.knife.show()
    printMessage("곰인형 밑에 이런게 있었다니..!!")
}
else{
    printMessage("귀여운 곰인형이 있다...")
}
}//곰인형 밀어버리기

room.knife.onClick = function(){
    room.knife.pick()
}

room.teddybear.onClick = function(){
    if(game.getHandItem() == room.knife){
        room.teddybear.setSprite("bear1-teared.png")
        printMessage("곰인형을 찢었더니 열쇠가 나왔다!")
        room.key.show()
    }
    else{
        printMessage("귀여운 곰인형이 있다...")
    }
}//곰을 찢으면 열쇠가 보임

room.key.onClick = function(){
    room.key.pick()
}

room.chest.onClick = function(){
    if(room.chest.isClosed()){
        room.door.open()
    }
    else if(room.chest.isLocked()){
        printMessage("상자가 잠겨 있다.")
    }
    else{}
}
room.chest.onClick = function(){
    if(game.getHandItem()==room.key){
        printMessage("상자가 열렸다!!")
        room.chest.setSprite("chest-open.png")
        room.postit2.show()

    }
    else{printMessage("잠겨 있는 것 같다.")}
}

room.postit2.onClick = function(){
    showImageViewer("포스트잇3.png");
    printMessage("이건 또 무슨 번호일까...?")
}//포스트잇을 클릭하면 자세히 보여줌



room.door.onClick = function(){
    if(room.door.isClosed()){
        room.door.open()
    }
    else if(room.door.isOpened()){
        game.move(hallway)//게임 클리어//코드 더해서 다음 방으로 넘어가기
    }
    else if(room.door.isLocked()){
        printMessage("문이 잠겨있다.")
    }
}

room.door.onOpen = function(){
    room.door.setSprite("문2-좌-열림.png")
}

room.keypad.onClick = function(){
    showKeypad("number","2451",function(){
        room.door.unlock()
        printMessage("잠금장치가 열리는 소리가 들렸다.")
    })
}
//************************************************************** */
//방 1 설정 완료

hallway.door1=hallway.createObject("door1","문2-좌-열림.png")
hallway.door1.setWidth(150)
hallway.locateObject(hallway.door1,280,400)
hallway.door1.open()

hallway.door1.onClick = function(){
    game.move(room)
    printMessage("새로운 공간이 나타났다.")
}//방1과 연결된 문 생성

hallway.door2=hallway.createObject("door2","문2-우-닫힘.png")
hallway.door2.setWidth(150)
hallway.locateObject(hallway.door2,1000,400)
hallway.door2.lock()//방2와 연결되는 문

hallway.keypad2=hallway.createObject("keypad2","키패드-우.png")
hallway.keypad2.setWidth(30)
hallway.locateObject(hallway.keypad2,880,300)//키패드 생성

hallway.paint=hallway.createObject("paint","그림1-우.png")
hallway.paint.setWidth(70)
hallway.locateObject(hallway.paint,870,270)//그림 생성

hallway.door3=hallway.createObject("door3","문-정면.png")
hallway.door3.setWidth(140)
hallway.locateObject(hallway.door3,670,330)
hallway.door3.lock()//문3 생성-dining1 로 연결

hallway.keypad3=hallway.createObject("keypad3","키패드-정면.png")
hallway.keypad3.setWidth(30)
hallway.locateObject(hallway.keypad3,550,300)
//hallway 오브젝트 생성 완료

//---------------------------------------------------------------------------------
hallway.paint.move=true
hallway.paint.onDrag = function(direction){
    if(direction == "Up"&& hallway.paint.move){
        printMessage("액자를 들었다")
        hallway.paint.moveX(0)
        hallway.paint.moveY(-100)
        hallway.paint.move=false
    }
    else{
        printMessage("멋진 액자가 걸려있다.")
    }
}
hallway.paint.onClick = function(){ 
        printMessage("멋진 액자가 걸려있다.")
}//액자 클릭시 

hallway.door2.onClick = function(){
    if(hallway.door2.isClosed()){
        hallway.door2.open()
    }
    else if(hallway.door2.isOpened()){
        game.move(room2)//게임 클리어//코드 더해서 다음 방으로 넘어가기
        printMessage("이곳이 서재인 것 같다.")
    }
    else if(hallway.door2.isLocked()){
        printMessage("문이 잠겨있다.")
    }
}

hallway.door2.onOpen = function(){
    hallway.door2.setSprite("문2-우-열림.png")
}


hallway.keypad2.onClick=function(){
    showKeypad("number","8803",function(){
        hallway.door2.unlock()
        printMessage("잠금장치가 풀리는 소리가 들렸다.")
    })
}//문2 열고 서재로 들어가기


hallway.door3.onClick = function(){
    if(hallway.door3.isClosed()){
        hallway.door3.open()
    }
    else if(hallway.door3.isOpened()){
        game.move(dining1)//게임 클리어//코드 더해서 거실로 넘어가기
        printMessage("좀 더 넓은 공간이 나타났다. 여기서는 뭔가 많은 단서를 찾을 수 있을까?")
    }
    else if(hallway.door3.isLocked()){
        printMessage("이건 무슨 문이지..? 역시 여기도 잠긴 것 같다.")
    }
}

hallway.door3.onOpen = function(){
    hallway.door3.setSprite("문-정면-열림.png")
}


hallway.keypad3.onClick=function(){
    showKeypad("number","2708",function(){
        hallway.door3.unlock()
        printMessage("잠금장치가 풀리는 소리가 들렸다.")
    })
}
//hallway 설정 완료!!
//*********************************************************** */
room2.door=room2.createObject("door","문2-좌-열림.png")
room2.door.setWidth(136)
room2.locateObject(room2.door,150,330)

room2.door.onClick = function(){
    game.move(hallway)
  
}//방1과 연결된 문 생성

room2.carpet=room2.createObject("carpet","카펫.png")
room2.carpet.setWidth(600)
room2.locateObject(room2.carpet,680,650)
//카펫 생성
room2.desk=room2.createObject("desk","교탁-왼쪽.png")
room2.desk.setWidth(530)
room2.locateObject(room2.desk,670,350)
//책상 생성
room2.chair=room2.createObject("chair","의자1-1.png")
room2.chair.setWidth(180)
room2.locateObject(room2.chair,850,420)
//의자 생성
room2.book=room2.createObject("book","책1-1.png")
room2.book2=room2.createObject("book2","책2-1.png")
room2.book3=room2.createObject("book3","책3-1.png")
room2.book.setWidth(70)
room2.book2.setWidth(70)
room2.book3.setWidth(70)
room2.locateObject(room2.book,650,250)
room2.locateObject(room2.book2,750,200)
room2.locateObject(room2.book3,550,250)
//책 생성
room2.diary=room2.createObject("diary","diary.png")
room2.diary.setWidth(50)
room2.locateObject(room2.diary,780,230)
//다이어리 

room2.picture1=room2.createObject("picture1","사진1-1.png")
room2.picture2=room2.createObject("picture2","사진2-1.png")
room2.picture3=room2.createObject("picture3","사진3-1.png")
room2.picture4=room2.createObject("picture4","사진4-1.png")
room2.picture1.setWidth(150)
room2.picture2.setWidth(130)
room2.picture3.setWidth(130)
room2.picture4.setWidth(150)
room2.locateObject(room2.picture1,320,80)
room2.locateObject(room2.picture2,500,80)
room2.locateObject(room2.picture3,680,80)
room2.locateObject(room2.picture4,320,200)
//사진 생성
room2.plant=room2.createObject("plant","식물2-2.png")
room2.plant.setWidth(400)
room2.locateObject(room2.plant,1200,340)
//식물 생성
//서재 오브젝트 생성완료
room2.diary.onClick=function(){
    showImageViewer("일기장2.png");
    printMessage("이 일기들은 이 집의 주인의 것일까..?")
}

room2.picture1.onClick=function(){
    showImageViewer("사진1.png");
    printMessage("결혼식의 사진인 것 같다.")
}

room2.picture2.onClick=function(){
    showImageViewer("사진2.png");
    printMessage("매우 행복해 보이는 사진이다.")
}

room2.picture3.onClick=function(){
    showImageViewer("사진3.png");
    printMessage("이 사진의 주인공들은 이 집에 살던 부부일까?")
}

room2.picture4.onClick=function(){
    showImageViewer("사진4.png");
    printMessage("이 사진의 주인공들은 모두 같은 사람들인 것 같다.")

}

room2.plant.onClick=function(){
    printMessage("이 식물도 그렇게 싱싱해 보이지는 않는다..")
}

//서재 설정 완료
//******************************************************** */
dining1.door=dining1.createObject("door","문-좌-열림.png")
dining1.door.setWidth(136)
dining1.locateObject(dining1.door,200,250)
//문 생성
dining1.door.onClick = function(){
    game.move(hallway)
    
}//방1과 연결된 문 생성
dining1.sink=dining1.createObject("sink","싱크대-오른쪽.png")
dining1.sink.setWidth(500)
dining1.locateObject(dining1.sink,690,300)
//싱크대 배치
dining1.board=dining1.createObject("board","도마.png")
dining1.board.setWidth(130)
dining1.locateObject(dining1.board,600,200)
//도마 배치
dining1.bread2=dining1.createObject("bread2","빵부스러기.png")
dining1.bread2.setWidth(120)
dining1.locateObject(dining1.bread2,610,210)
dining1.bread2.hide()
//빵 부스러기 배치, 숨기기
dining1.bread1=dining1.createObject("bread1","빵.png")
dining1.bread1.setWidth(120)
dining1.locateObject(dining1.bread1,610,210)
dining1.bread1.show()
//빵 배치

dining1.box=dining1.createObject("box","상자3-닫힘.png")
dining1.knife1=dining1.createObject("knife1","과도.png")
dining1.box.setWidth(200)
dining1.knife1.setWidth(150)
dining1.locateObject(dining1.box,200,550)
dining1.locateObject(dining1.knife1,200,550)
dining1.knife1.hide()
//박스, 칼 배치
dining1.box.onClick=function(){
    if(dining1.box.isOpened()){
        dining1.box.close()
    }
    else if(dining1.box.isClosed()){
        dining1.box.open()
    }
    else{}
}
//박스 클릭시 변화
dining1.box.onOpen=function(){
    dining1.box.setSprite("상자3-열림.png")
    printMessage("이런 곳에 칼이 있다니..!")
    dining1.knife1.show()
    
}
dining1.box.onClose=function(){
    dining1.box.setSprite("상자3-닫힘.png")
    dining1.knife1.hide()
}//칼 숨기기

dining1.table=dining1.createObject("table","테이블3-2.png")
dining1.table.setWidth(550)
dining1.locateObject(dining1.table,850,550)
//식탁 배치

dining1.plate=dining1.createObject("plate","접시.png")
dining1.plate.setWidth(130)
dining1.locateObject(dining1.plate,880,450)
//접시 배치
//거실1 오브젝트 완료
dining1.knife1.onClick=function(){
    dining1.knife1.pick()
    printMessage("칼을 얻었다.")
}//과도 줍기

dining1.plate.onClick=function(){
    dining1.plate.pick()
    printMessage("접시를 얻었다.")
}//접시 줍기

dining1.bread1.onClick=function(){
    if(game.getHandItem()==dining1.knife1){
        dining1.bread1.hide()
        dining1.bread2.show()
        printMessage("칼로 빵을 잘게 잘랐다.")     
    }
    else{
        printMessage("맛있어 보이는 빵이 놓여있다.")
    }
}//빵 자르기

dining1.bread2.onClick=function(){
    dining1.bread2.pick()
    printMessage("빵부스러기를 얻었다.")
}//빵 부스러기 얻기
dining1.bplate=dining1.createObject("bplate","빵접시.png")
dining1.bplate.hide()

game.makeCombination(dining1.bread2,dining1.plate,dining1.bplate)
//아이템 조합

dining1.arrowr=dining1.createObject("arrowr","화살표-오른쪽.png")
dining1.arrowl=dining1.createObject("arrowl","화살표-왼쪽.png")
dining1.arrowr.setWidth(50)
dining1.arrowl.setWidth(50)
dining1.locateObject(dining1.arrowr,1200,360)
dining1.locateObject(dining1.arrowl,80,360)
//거실1 화살표 생성
dining1.arrowr.onClick=function(){
    game.move(dining2)
}
dining1.arrowl.onClick=function(){
    game.move(dining4)
}



//거실1완료
//*************************************************** */


dining2.cupboard=dining2.createObject("cupboard","찬장-4-닫힘.png")
dining2.cupboard.setWidth(500)
dining2.locateObject(dining2.cupboard,920,280)
//찬장 설정
dining2.art=dining2.createObject("art","장식2-우.png")
dining2.art.setWidth(300)
dining2.locateObject(dining2.art,920,140)
//장식 설정
dining2.hint=dining2.createObject("hint","종이조각.png")
dining2.hint.setWidth(50)
dining2.locateObject(dining2.hint,970,240)
dining2.hint.hide()
//힌트 숨기기
dining2.parrot=dining2.createObject("parrot","앵무새-열쇠.png")
dining2.parrot.setWidth(170)
dining2.locateObject(dining2.parrot,420,310)
//앵무새 배치
dining2.key2=dining2.createObject("key2","열쇠2.png")
dining2.key2.setWidth(80)
dining2.locateObject(dining2.key2,450,680)
dining2.key2.hide()
//열쇠 배치, 숨기기

dining2.figure=dining2.createObject("figure","오르골인형.png")
dining2.figure.setWidth(100)
dining2.locateObject(dining2.figure,780,350)
dining2.figure.hide()
//오르골 인형 숨기기
dining2.cupboard.onClick=function(){
    if(dining2.cupboard.isOpened()){
        dining2.cupboard.close()
    }
    else if(dining2.cupboard.isClosed()){
        dining2.cupboard.open()
    }
    else{}
}
dining2.cupboard.onOpen=function(){
    dining2.cupboard.setSprite("찬장-4-열림.png")
    dining2.figure.show()
}
dining2.cupboard.onClose=function(){
    dining2.cupboard.setSprite("찬장-4-닫힘.png")
    dining2.figure.hide()
}

dining2.figure.onClick=function(){
    dining2.figure.pick()
    printMessage("작은 인형을 얻었다. 어디에 쓸 수 있을까?")
}

dining2.parrot.onClick=function(){
    if(game.getHandItem()==dining1.bplate){
        printMessage("먹이를 주니 앵무새가 열쇠를 놓았다")
        dining2.parrot.setSprite("앵무새-그냥.png")
        dining2.key2.show()
    }
    else{
        printMessage("앵무새가 열쇠를 물고 놓아주지 않는다")
    }
}

dining2.key2.onClick=function(){
    dining2.key2.pick()
    printMessage("열쇠를 얻었다. 어디를 열 수 있을까?")
}//열쇠 얻음

dining2.arrowr=dining2.createObject("arrowr","화살표-오른쪽.png")
dining2.arrowl=dining2.createObject("arrowl","화살표-왼쪽.png")
dining2.arrowr.setWidth(50)
dining2.arrowl.setWidth(50)
dining2.locateObject(dining2.arrowr,1200,360)
dining2.locateObject(dining2.arrowl,80,360)
//거실 2 화살표 생성
dining2.arrowr.onClick=function(){
    game.move(dining3)
}
dining2.arrowl.onClick=function(){
    game.move(dining1)
}
//거실2 완료
//*********************************************************** */

dining3.door=dining3.createObject("door","문-우-정원.png")
dining3.door.setWidth(136)
dining3.locateObject(dining3.door,1049,250)
//정원으로 통하는 문 생성
dining3.door.onClick=function(){
    game.move(garden1)
}

//정원으로 이동
dining3.in=dining3.createObject("in","입구.png")
dining3.in.setWidth(450)
dining3.locateObject(dining3.in,260,520)
dining3.in.lock()
//지하실 입구 배치
dining3.keypad=dining3.createObject("keypad","키패드-누움.png")
dining3.keypad.setWidth(70)
dining3.locateObject(dining3.keypad,25,550)
//키패드 배치
dining3.sofa=dining3.createObject("sofa","소파1.png")
dining3.sofa.setWidth(670)
dining3.locateObject(dining3.sofa,250,430)
//소파 배치
dining3.sofa.onClick=function(){
    printMessage("푹신해 보이는 소파이다.")
}

dining3.sofa.move=true
dining3.sofa.onDrag=function(direction){
    if(direction=="Right"&&dining3.sofa.move){
        printMessage("소파를 밀었더니 수상한 통로가 나왔다...!!")
        dining3.sofa.moveX(450)
        dining3.sofa.moveY(0)
        dining3.sofa.move=false
    }
    else{
        printMessage("푹신해 보이는 소파이다.")
    }
}

//소파 움직임
dining3.table=dining3.createObject("table","테이블4.png")
dining3.table.setWidth(550)
dining3.locateObject(dining3.table,800,600)
//테이블 배치
dining3.orgel=dining3.createObject("orgel","오르골-닫힘.png")
dining3.orgel.setWidth(100)
dining3.locateObject(dining3.orgel,800,530)
//오르골 배치, 잠김
dining3.hint=dining3.createObject("hint","종이조각.png")
dining3.hint.setWidth(50)
dining3.locateObject(dining3.hint,810,560)
dining3.hint.hide()
//힌트
dining3.diary=dining3.createObject("diary","diary.png")
dining3.diary.setWidth(100)
dining3.locateObject(dining3.diary,940,555)
//다이어리 배치
dining3.diary.onClick=function(){
    showImageViewer("일기장3.png")
    printMessage("이곳에 일기장이 또 있다.. 이상한 공간? 어디에 있는거지..")
}//다이어리 클릭시

dining3.in.onClick=function(){
    if(dining3.in.isClosed()){
        dining3.in.open()
    }
    else if(dining3.in.isOpened()){
        game.move(base1)
        printMessage("뭐지...? 너무 소름 돋는 공간이다. 여기 무슨 일이 일어났던 거지..?")
    }
    else if(dining3.in.isLocked()){
        printMessage("잠겨 있는 것 같다.")
    }
}//입구 열고 닫기

dining3.in.onOpen=function(){
    dining3.in.setSprite("입구-열림.png")
}//입구를 열린 상태로 바꿈

dining3.keypad.onClick=function(){
    showKeypad("number","0525",function(){
        dining3.in.unlock()
        printMessage("잠금장치가 풀리는 소리가 들렸다!!!")
    })
}//키패드 누르기

dining3.orgel.onClick=function(){
    if(dining3.orgel.isOpened()){
        dining3.orgel.close()
    }
    else if(game.getHandItem()==dining2.figure&&dining3.orgel.isClosed()){
        dining3.orgel.open()
    }
    else{
        printMessage("오르골이 잠겨 있는 것 같다.")
    }
}
dining3.orgel.onOpen=function()
{
    printMessage("오르골이 열렸다...!! 그런데 이 종이는 뭐지?")
    dining3.orgel.setSprite("오르골-열림.png")
    dining3.hint.show()
}
dining3.orgel.onClose=function(){
    dining3.orgel.setSprite("오르골-완성.png")
    dining3.hint.hide()
}
//오르골 열고 닫기
dining3.hint.onClick=function(){
    showImageViewer("힌트1.png");
    printMessage("이 그림과 숫자는 또 무슨 의미일까..?")
}



dining3.arrowr=dining3.createObject("arrowr","화살표-오른쪽.png")
dining3.arrowl=dining3.createObject("arrowl","화살표-왼쪽.png")
dining3.arrowr.setWidth(50)
dining3.arrowl.setWidth(50)
dining3.locateObject(dining3.arrowr,1200,360)
dining3.locateObject(dining3.arrowl,80,360)
//거실 3 화살표 생성
dining3.arrowr.onClick=function(){
    game.move(dining4)
}
dining3.arrowl.onClick=function(){
    game.move(dining2)
}
//거실 3 완료
//***************************************************************** */


dining4.carpet=dining4.createObject("carpet","카펫.png")
dining4.carpet.setWidth(700)
dining4.locateObject(dining4.carpet,700,680)
//카펫 생성
dining4.cabent=dining4.createObject("cabent","캐비닛2-1-닫힘.png")
dining4.cabent.setWidth(180)
dining4.locateObject(dining4.cabent,250,300)
//캐비닛 생성
dining4.hammer=dining4.createObject("hammer","망치.png")
dining4.hammer.setWidth(100)
dining4.locateObject(dining4.hammer,240,150)
dining4.hammer.hide()
//망치 숨기기
dining4.charge=dining4.createObject("charge","건전지.png")
dining4.charge.setWidth(50)
dining4.locateObject(dining4.charge,250,200)
dining4.charge.hide()
//건전지 숨기기
dining4.cabent.onClick=function(){
    if(dining4.cabent.isOpened()){
        dining4.cabent.close()
    }
    else if(dining4.cabent.isClosed()){
        dining4.cabent.open()
    }
    else{}
}

dining4.cabent.onOpen=function(){
    dining4.cabent.setSprite("캐비닛2-1-열림.png")
    dining4.charge.show()
    dining4.hammer.show() 
}
dining4.cabent.onClose=function(){
    dining4.cabent.setSprite("캐비닛2-1-닫힘.png")
    dining4.charge.hide()
    dining4.hammer.hide()
}
//캐비닛 열고 닫기
dining4.cupboard=dining4.createObject("cupboard","찬장-왼쪽-닫힘.png")
dining4.cupboard.setWidth(170)
dining4.locateObject(dining4.cupboard,500,100)
//찬장 생성
dining4.remote=dining4.createObject("remote","리모컨.png")
dining4.remote.setWidth(100)
dining4.locateObject(dining4.remote,550,150)
dining4.remote.hide()
//리모컨 숨기기
dining4.hint=dining4.createObject("hint","종이조각.png")
dining4.hint.setWidth(50)
dining4.locateObject(dining4.hint,510,100)
dining4.hint.hide()
//힌트 배치 숨기기

dining4.tv=dining4.createObject("tv","TV2-2.png")
dining4.tv.setWidth(450)
dining4.locateObject(dining4.tv,1000,200)
//tv생성
dining4.diary=dining4.createObject("diary","diary.png")
dining4.diary.setWidth(100)
dining4.locateObject(dining4.diary,700,550)
dining4.diary.onClick=function(){
    showImageViewer("일기장4.png")
    printMessage("비밀번호에 대한 힌트..? 어서 찾아봐야겠다.")
}//다이어리 배치

dining4.hammer.onClick=function(){
    dining4.hammer.pick()
    printMessage("망치를 주웠다.")
}//망치 주움
dining4.charge.onClick=function(){
    dining4.charge.pick()
    printMessage("건전지를 주웠다.")
}//건전지 주움

dining4.cupboard.onClick=function(){
    if(dining4.cupboard.isOpened()){
        dining4.cupboard.close()
    }
    else if(game.getHandItem()==dining2.key2&&dining4.cupboard.isClosed()){
        dining4.cupboard.open()
    }
    else{
        printMessage("찬장이 잠겨있는 것 같다")
    }
}
dining4.cupboard.onOpen=function(){
    printMessage("찬장이 열렸다.")
    dining4.cupboard.setSprite("찬장-왼쪽-열림.png")
    dining4.hint.show()
    dining4.remote.show()
}

dining4.cupboard.onClose=function(){
    dining4.cupboard.setSprite("찬장-왼쪽-닫힘.png")
    dining4.remote.hide()
        dining4.hint.hide()
    
}

dining4.remote.onClick=function(){
    dining4.remote.pick()
    printMessage("리모콘을 얻었다. 그런데 건전지가 없는 것 같다.")
}

dining4.hint.onClick=function(){
    showImageViewer("힌트3.png");
}

dining4.remote2=dining4.createObject("remote2","리모컨.png")
dining4.remote2.hide()

game.makeCombination(dining4.remote,dining4.charge,dining4.remote2)

dining4.tv.onClick=function(){
    if(game.getHandItem()==dining4.remote2){
        printMessage("리모컨을 이용해 티비를 켜니 이상한 화면이 나왔다.")
        dining4.tv.setSprite("TV2-2힌트.png")
    }
    else{
        printMessage("커다란 티비가 있다.")
    }
}
//***********************************************거실 2에 대하여 */
dining2.art.onClick=function(){
    if(game.getHandItem()==dining4.hammer){
        printMessage("망치를 이용해 장식장을 부쉈더니 종이 조각이 나왔다..!!")
        dining2.art.setSprite("장식2-깨짐.png")
        dining2.hint.show()
    }
    else{
        printMessage("멋진 물고기 모양 장식이 있다.")
    }
}

dining2.hint.onClick=function(){
    showImageViewer("힌트4.png")
}

dining4.arrowr=dining4.createObject("arrowr","화살표-오른쪽.png")
dining4.arrowl=dining4.createObject("arrowl","화살표-왼쪽.png")
dining4.arrowr.setWidth(50)
dining4.arrowl.setWidth(50)
dining4.locateObject(dining4.arrowr,1200,360)
dining4.locateObject(dining4.arrowl,80,360)
//거실 4 화살표 생성
dining4.arrowr.onClick=function(){
    game.move(dining1)
}
dining4.arrowl.onClick=function(){
    game.move(dining3)
}
//거실4완동
//************************************************************************* */
garden1.key3=garden1.createObject("key3","열쇠3.png")
garden1.key3.setWidth(100)
garden1.locateObject(garden1.key3,600,650)
//열쇠 놓기
garden1.key3.onClick=function(){
    garden1.key3.pick()
    printMessage("이 열쇠는 또 어디에 쓰일 수 있을까?")
}//열쇠 줍기

garden1.arrowd=garden1.createObject("arrowd","화살표-아래.png")
garden1.arrowd.setWidth(50)
garden1.locateObject(garden1.arrowd,640,690)
garden1.arrowu=garden1.createObject("arrowu","화살표-위.png")
garden1.arrowu.setWidth(50)
garden1.locateObject(garden1.arrowu,640,400)
//정원 화살표 생성
garden1.arrowd.onClick=function(){
    game.move(dining3)
}
garden1.arrowu.onClick=function(){
    game.move(garden2)
}
//정원 1 이동
garden2.finaldoor=garden2.createObject("finaldoor","정원2-문닫힘.png")
garden2.locateObject(garden2.finaldoor,670,440)


//문 설치,잠김
garden2.arrowd=garden2.createObject("arrowd","화살표-아래.png")
garden2.arrowd.setWidth(50)
garden2.locateObject(garden2.arrowd,640,690)
//정원 2 화살표 생성
garden2.arrowd.onClick=function(){
    game.move(garden1)
}//정원 2-1이동
//***************************************************** */

//base1오브젝트 생성
base1.stiar=base1.createObject("stiar","계단.png")
base1.stiar.setWidth(500)
base1.locateObject(base1.stiar,200,280)
//계단 생성 완료
base1.closet=base1.createObject("closet","옷장-2-닫힘-피.png")
base1.closet.setWidth(300)
base1.locateObject(base1.closet,1000,280)
//옷장 생성 완료
base1.leg=base1.createObject("leg","다리.png")
base1.leg.setWidth(100)
base1.locateObject(base1.leg,900,320)
base1.leg.hide()
//다리 완료
base1.closet.onClick=function(){
    if(base1.closet.isOpened()){
        base1.closet.close()
    }
    else if(game.getHandItem()==garden1.key3&&base1.closet.isClosed()){
        base1.closet.open()
    }
    else{
        printMessage("피가 잔뜩 묻어있다.. 잠겨있는 것 같다..")
    }
}//옷장 
base1.closet.onOpen=function(){
    printMessage("옷장이 열렸다..!!")
    base1.closet.setSprite("옷장-2-열림-피.png")
    base1.leg.show()
}
base1.closet.onClose=function(){
    base1.closet.setSprite("옷장-2-닫힘-피.png")
}//옷장 열고 닫기
base1.leg.onClick=function(){
    base1.leg.pick()
    printMessage("잘린 다리를 얻었다...")
}//다리 줍기

base1.arrowr=base1.createObject("arrowr","화살표-오른쪽.png")
base1.arrowr.setWidth(50)
base1.locateObject(base1.arrowr,1200,360)
//지하 화살표 생성
base1.arrowr.onClick=function(){
    game.move(base2)
    printMessage("으악..!! 너무 끔찍한 장면이다.. 저 사람.. 죽은걸까..?")
}//base2로 이동
base1.arrowu=base1.createObject("arrowu","화살표-위.png")
base1.arrowu.setWidth(50)
base1.locateObject(base1.arrowu,300,100)
//위 화살표 생성
base1.arrowu.onClick=function(){
    game.move(dining3)
}//dining2로 이동

//base1d오브잭트 완료
base2.body=base2.createObject("body","시체.png")
base2.body.setWidth(500)
base2.locateObject(base2.body,650,550)
//시체 완료
base2.whiteboard=base2.createObject("whiteboard","화이트보드-오른쪽2.png")
base2.whiteboard.setWidth(450)
base2.locateObject(base2.whiteboard,1000,230)
//화이트보드 완료

base2.closet2=base2.createObject("closet2","벽장.png")
base2.closet2.setWidth(200)
base2.locateObject(base2.closet2,300,220)
base2.closet2.lock()
//벽장 완료
base2.mirror1=base2.createObject("mirror1","거울.png")
base2.mirror1.setWidth(100)
base2.locateObject(base2.mirror1,310,240)
base2.mirror1.hide()
//거울 완료
base2.keypad4=base2.createObject("keypad4","키패드-좌.png")
base2.keypad4.setWidth(50)
base2.locateObject(base2.keypad4,130,300)
//키패드 생성
base2.body.onClick=function(){
    if(game.getHandItem()==base1.leg){
        base2.body.setSprite("시체-완성.png")
        base2.whiteboard.setSprite("화이트보드-오른쪽-글자.png")
        printMessage("이것은 이 사람의 다리인 것 같다... 아니 화이트보드에 뭔가 나타났다..!!")
        
    }
    else{
        printMessage("다리가 잘려 죽어있다... 이 사람을 보니 아까 전 내 다리의 통증도 다시 살아나는 것 같다.. 근데 이사람 낯이 익은데..")
    }
}//시체 설정

base2.closet2.onClick=function(){
    if(base2.closet2.isClosed()){
        base2.closet2.open()
        base2.mirror1.show()
    }
    else if(base2.closet2.isOpened()){
        
    }
    else if(base2.closet2.isLocked()){
        printMessage("벽장이 잠겨 있다")
    }
}
base2.closet2.onOpen=function(){
    base2.closet2.setSprite("벽장-열림.png")
    printMessage("벽장 안에 거울이 있었다.")
}
base2.keypad4.onClick=function(){
    showKeypad("number","0716",function(){
        base2.closet2.unlock()
        printMessage("잠금장치가 풀리는 소리가 들렸다.")
    })
}//키패드 사용하기
base2.mirror1.onClick=function(){
    game.move(mirror)
    printMessage("거울 속에 어떤 남자가 열쇠를 건네고 있다.. 이 사람.. 여기 살던 사진 속의 사람인 것 같다")
}//거울 안으로 이동하기

base2.arrowl=base2.createObject("arrowl","화살표-왼쪽.png")
base2.arrowl.setWidth(50)
base2.locateObject(base2.arrowl,80,360)
//화살표 생성
//*******************************거울속 */
mirror.key5=mirror.createObject("key5","정원열쇠.png")
mirror.key5.setWidth(400)
mirror.locateObject(mirror.key5,640,400)
//키
mirror.key5.onClick=function(){
    mirror.key5.pick()
    printMessage("남자에게서 열쇠를 받았다. 도대체 이 남자에게 무슨 일이 일어났던 걸까...")
}
//열쇠 받음
mirror.arrowd=mirror.createObject("arrowd","화살표-아래.png")
mirror.arrowd.setWidth(50)
mirror.locateObject(mirror.arrowd,640,680)
//화살표 배치
mirror.arrowd.onClick=function(){
    game.move(base2)
}//base2로 이동
base2.arrowl.onClick=function(){
    game.move(base1)
}//base1로 이동
//base2오브젝트 완료
garden2.finaldoor.onClick=function(){
    if(garden2.finaldoor.isOpened()){
        game.clear()
    }
   else if(game.getHandItem()==mirror.key5&&garden2.finaldoor.isClosed)
  { garden2.finaldoor.open()}
  else{
      printMessage("이 문을 열고 나가면 이곳을 탈출 할 수 있을 것 같다. 하지만 지금은 잠겨있다.")
  }
}

garden2.finaldoor.onOpen=function(){
    printMessage("문이 열렸다...!!!드디어 이곳을 나갈 수 있어..!!! 그런데..애초에 내가 왜 이곳에 있었던 거지..?")
    garden2.finaldoor.setSprite("정원2-문열림.png")
}


game.start(room)//게임 시성
printMessage("다리에 통증을 느끼며 눈을 떴다. 여기는 어디지...? 낯설지 않은 장소다..")
