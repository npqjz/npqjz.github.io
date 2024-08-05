## 测试

```cpp
#include <iostream>
int main()
{
   std::cout << "Hello World!" << std::endl;
   return 0;
}
```

:::tip
这是一个提示
:::

```js
console.log('每个仓库都应该有个吉祥物。')
```

````js {1,4-6,11} showLineNumbers
- ```jsx {3}
+ ```jsx {4}
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return '这行被高亮了！'
  }

  return '这里不会'
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return '这块被高亮了！'
  }
  // highlight-end

  return '这里不会'
}
````

```jsx live title="Clock"
function Clock(props) {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(new Date())
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}
```

```jsx

```
