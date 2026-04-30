import { useState, type ReactNode } from "react";
import Toast from "./components08/Modal02";
import { createPortal } from "react-dom";

const ModalPotal=({children}:{children:ReactNode})=>{
    const target=document.querySelector(".container.start");
    if(!target)return null;
    return createPortal(children,target);
}

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <h3>
        トーストの作成（createPortal）
      </h3>
      <p>ボタンを押すと.container.start要素にマウントされて、表示されるトーストを作成してください。トーストにはToastコンポーネントを使用してください。</p>

      <div className="container start"></div>
      
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      <ModalPotal>
         {toastOpen && (
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
      )}
      </ModalPotal>
    </div>
  );
};

export default Example;
