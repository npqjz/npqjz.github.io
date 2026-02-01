#include <stdio.h>
#include <stdlib.h>


void InsertSort(int A[], int n){
    int i,j;
    for ( i = 2; i <= n; i++)
    {
      /* code */
      if (A[i]<A[i-1]) {
        A[0] = A[i];
        for ( j = i - 1;A[0] < A[j]; --j)
          A[j+1] = A[j];
        A[j+1] = A[0];
      }
    }
  }

void zhebanSort(int A[], int n) {
  int i,j,low,high,mid;
  for ( i = 2; i <= n; i++)
  {
    low = 1;
    high = i - 1;
    A[0] = A[i];
    while (low <= high)
    {
      mid = (low + high) / 2;
      if (A[mid] > A[0])
        high = mid - 1;
      else
        low = mid +1;
    }
    for ( j = i - 1; j >= high + 1; j--)
      A[j+1] = A[j];
    A[high+1] = A[0];
  }
}

int main(){
  int A[11];
  int n;
  scanf("%d",&n);
//   随机产生n个元素
  for (int i = 0; i < n; i++)
  {
    A[i] = rand()%100;
  }
  for (int i = 0; i < n; i++)
  {
    printf("%d ",A[i]);
  }
  printf("\n");
  // InsertSort(A,n);
  zhebanSort(A,n);
  for (int i = 0; i < n; i++)
  {
    printf("%d ",A[i]);
  }
  return 0;
}