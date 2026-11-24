// App.jsx
import InputCard from "./components/InputCard";

export default function App() {
  const inputInfo = {
    title: "검색",
    placeholder: "검색어를 입력하세요",
  };

  return (
    <div>
      {/* spread로 props 전달 */}
       <InputCard {...inputInfo}/>


    </div>
  );
}
