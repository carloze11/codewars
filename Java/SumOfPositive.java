public class SumOfPositive {
    public static int sum(int[] arr){
        int sum = 0;
          
        for (int val : arr){
            if (val > 0){
             sum += val;
            }
        }
          
        return sum;
    } 
}
