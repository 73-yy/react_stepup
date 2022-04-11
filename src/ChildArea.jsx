import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memoはpropsが変更されない限り、再レンダリングしないよ。という意味
// setOpenが渡されるが、onClickOpenとsetClickCloseは違う関数=propsの変更なので、都度動く
export const ChildArea = memo((props) => {
  console.log("Childがレンダリングされた");
  const { open, onClickClose } = props;
  const data = [...Array(2000).keys()];
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
