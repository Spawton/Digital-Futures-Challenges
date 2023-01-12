import java.util.HashMap;

public class Scrabble {

    int score = 0;
    private String word;
    HashMap<Character, Integer> pointScore = new HashMap<Character, Integer>();


    public Scrabble(String word){
        this.word = word;

        pointScore.put('A', 1);
        pointScore.put('B', 3);
        pointScore.put('C', 3);
        pointScore.put('D', 2);
        pointScore.put('E', 1);
        pointScore.put('F', 4);
        pointScore.put('G', 2);
        pointScore.put('H', 4);
        pointScore.put('I', 1);
        pointScore.put('J', 8);
        pointScore.put('K', 5);
        pointScore.put('L', 1);
        pointScore.put('M', 3);
        pointScore.put('N', 1);
        pointScore.put('O', 1);
        pointScore.put('P', 3);
        pointScore.put('Q', 10);
        pointScore.put('R', 1);
        pointScore.put('S', 1);
        pointScore.put('T', 1);
        pointScore.put('U', 1);
        pointScore.put('V', 4);
        pointScore.put('W', 4);
        pointScore.put('X', 8);
        pointScore.put('Y', 4);
        pointScore.put('Z', 10);

    }

    int score(){
        if(this.word == null || this.word == " " ){
            return score += 0;
        }

        this.word = this.word.toUpperCase();

        for(int i = 0; i < word.length();i++) {
            score += pointScore.get(word.charAt(i));
        }
        return score;
    }
}