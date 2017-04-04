//1018. 锤子剪刀布 (20)
//
//大家应该都会玩“锤子剪刀布”的游戏，现给出两人的交锋记录，请统计双方的胜、平、负次数，并且给出双方分别出什么手势的胜算最大。
//
//输入格式：
//
//输入第1行给出正整数N（<=105），即双方交锋的次数。随后N行，每行给出一次交锋的信息，即甲、乙双方同时给出的的手势。C代表“锤子”、J代表“剪刀”、B代表“布”，第1个字母代表甲方，第2个代表乙方，中间有1个空格。
//
//输出格式：
//
//输出第1、2行分别给出甲、乙的胜、平、负次数，数字间以1个空格分隔。第3行给出两个字母，分别代表甲、乙获胜次数最多的手势，中间有1个空格。如果解不唯一，则输出按字母序最小的解。
//
//输入样例：
//10
//C J
//J B
//C B
//B B
//B C
//C C
//C B
//J B
//B C
//J J
//输出样例：
//5 3 2
//2 3 5
//B B
#include<cstdio>
int change(char c) {
	if(c == 'B') return 0;
	if(c == 'C') return 1;
	if(c == 'J') return 2;
}
int main(){
	char mp[3] = {'B', 'C', 'J'};
	int n;
	scanf("%d", &n);
	int times_A[3] = {0}, times_B[3] = {0};
	int hand_A[3] = {0}, hand_B[3] = {0};
	char c1, c2;
	int k1, k2;
	for(int i = 0; i < n; i++){
		getchar();
		scanf("%c %c", &c1, &c2);
		k1 = change(c1);
		k2 = change(c2);
		if((k1+1) % 3 == k2){
			times_A[0]++;
			times_B[2]++;
			hand_A[k1]++;
		} else if(k1 == k2){
			times_A[1]++;
			times_B[1]++;
		} else {
			times_A[2]++;
			times_B[0]++;
			hand_B[k2]++;
		}
	}
	printf("%d %d %d\n", times_A[0], times_A[1], times_A[2]);
	printf("%d %d %d\n", times_B[0], times_B[1], times_B[2]);
	int id1 = 0, id2 = 0;
	for(int i = 0; i < 3; i++){
		if(hand_A[i] > hand_A[id1]) id1 = i;
		if(hand_B[i] > hand_B[id2]) id2 = i;
	}
	printf("%c %c\n", mp[id1], mp[id2]);
	return 0;
} 
