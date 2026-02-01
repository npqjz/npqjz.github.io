#include <stdio.h>
#include <stdlib.h>

// 定义一个顺序表
#define MAXSIZE 100
typedef int ElemType;
typedef struct
{
   ElemType data[MAXSIZE];
   int length;
} SqList;
typedef struct 
{
   ElemType data;
   int next;
   int prev;
} LinkList;
typedef struct
{
   ElemType data;
   int next;
   int prev;
} LNode;



bool Del_Min(SqList &L, ElemType &value) {
   if(L.length == 0) {
      return false;
   }

   value = L.data[0];
   int pos = 0;
   for (int i = 1; i < L.length; i++) {
      if(L.data[i] < value) {
         value = L.data[i];
         pos = i;
      }
   }
   L.data[pos] = L.data[L.length - 1];
   L.length--;
   return true;
}

void Reserve(SqList &L) {
   for (int i = 0; i < L.length / 2; i++) {
      ElemType temp = L.data[i];
      L.data[i] = L.data[L.length - 1 - i];
      L.data[L.length - 1 - i] = temp;
   }
}

void del_x_2(SqList &L, ElemType x) {
   int k = 0,i = 0;
   while(i < L.length) {
      if(L.data[i] != x) {
         L.data[k++] = L.data[i];
      }
      i++;
   }
   L.length = k;
}

bool del_s_t(SqList &L, ElemType s, ElemType t) {
   int k = 0,i = 0;
   while(i < L.length) {
      if(L.data[i] < s || L.data[i] > t) {
         L.data[k++] = L.data[i];
      }
      i++;
   }
   L.length = k;
   return true;
}

bool Delete_Same(SqList &L, ElemType x) {
  if(L.length == 0) 
    return false;

  int i,j;
  for(i = 0,j = 1; j < L.length; j++) {
   if(L.data[i] != L.data[j]) {
     L.data[++i] = L.data[j];
   }
  }
   L.length = i + 1;
   return true;
}

bool Merge(SqList A, SqList B, SqList &C) {
   if(A.length == 0 || B.length == 0) {
      return false;
   }
   int i = 0, j = 0, k = 0;
   while(i < A.length && j < B.length) {
      if(A.data[i] < B.data[j]) {
         C.data[k++] = A.data[i++];
      } else {
         C.data[k++] = B.data[j++];
      }
   }
   while(i < A.length) {
      C.data[k++] = A.data[i++];
   }
   while(j < B.length) {
      C.data[k++] = B.data[j++];
   }
   C.length = k;
   return true;
}

void Reverse(int A[],int left,int right,int ArraySize) {
   if(left >= right || right >= ArraySize) 
      return;
   int mid = (left + right) / 2;
   for (int i = 0;i <= mid - left;i++) {
      int temp = A[left + i];
      A[left + i] = A[right - i];
      A[right - i] = temp;
   }
}

void Exchange(int A[],int m,int n,int ArraySize) {
   Reverse(A, 0, m+n-1, ArraySize);
   Reverse(A, 0, n-1, ArraySize);
   Reverse(A, n, m+n-1, ArraySize);
   
}


void SearchExchangeInsert( ElemType A[], int x) {
   //  数组的长度 
   int length = sizeof(A) / sizeof(A[0]);
   int low = 0, high = length - 1, mid = 0;
   while(low <= high) {
      mid = (low + high) / 2;
      if(A[mid] > x) {
         high = mid - 1;
      } else if(A[mid] < x) {
         low = mid + 1;
      } else {
         break;
      }
   }
   if(A[mid] == x && mid != length - 1) {
      ElemType temp = A[mid];
      A[mid] = A[mid + 1];
      A[mid + 1] = temp;
   }
   if(low > high) {
      for(int i = length - 1;i >= high;i--) {
         A[i + 1] = A[i];
      }
      A[high + 1] = x;
   }
}

void samekey(int A[],int B[],int C[], int n) {
   int i= 0, j = 0, k = 0;
   while(i < n && j < n && k < n) {
      if(A[i] == B[j] && B[j] == C[k]) {
         printf("%d ",A[i]);
         i++;
         j++;
         k++;
      } else {
         int maxNum = max( max(A[i],B[j]), C[k]);
         if(maxNum >A[i])  i++;
         if(maxNum > B[j])  j++;
         if(maxNum > C[k])  k++;
      }
   }

}

int max(int a, int b) {
   return a > b ? a : b;
}




   