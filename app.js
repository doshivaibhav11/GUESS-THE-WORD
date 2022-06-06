
var app=angular.module("GUESSTHEWORD",[]);
app.controller("GameController",['$scope',function($scope){
    var words=["vaibhav","arpit","rahul","harshil"];
    $scope.incorrectLettersChosen=[];
    $scope.correctLettersChosen=[];
    $scope.guesses=10;
    $scope.displayWord='';
    $scope.input={
        letter:''
    };
    var selectRandomWord=function(){
        var index=Math.round(Math.random() * words.length)
        return words[index];
    }
    var newGame=function(){
        $scope.incorrectLettersChosen=[];
        $scope.correctLettersChosen=[];
        $scope.guesses=10;
        $scope.displayWord='';
        selectedWord=selectRandomWord();
        
        var tempDisplayWord= '';
        
        for(var i=0;i<selectedWord.length;i++){
            tempDisplayWord +='*';

        }
        console.log(tempDisplayWord);
        $scope.displayWord =tempDisplayWord;
    }
    $scope.letterChosen=function(){

    for(var i=0; i<$scope.correctLettersChosen.length;i++){
        if($scope.correctLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()){
            $scope.input.letter="";
            return;
        }
    }
    
    for(var i=0; i<$scope.incorrectLettersChosen.length;i++){
        if($scope.incorrectLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.input.letter="";
            return;
            }
    }

    var correct=false;
    for(var i=0;i<selectedWord.length;i++){
        if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
            correct=true;
        }
    }
    if(correct){
        $scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
    }else{
        $scope.guesses--;
        $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
    }

    $scope.input.letter="";
    if($scope.guesses==0){
        alert("You Lost!");
    }
    if($scope.displayWord.indexOf("*")==-1){
        alert("You Won Yeah!");
        window.location.reload();
    }
    }
    newGame();
}
]);
