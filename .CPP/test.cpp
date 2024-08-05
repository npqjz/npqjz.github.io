#include <stdio.h>
#include <emscripten/emscripten.h>
#include <emscripten/em_macros.h>

extern "C"{
  int add(int x, int y){
	 return x+y;
  }
  int sub(int x, int y){
  	 return x-y; 
  }
}