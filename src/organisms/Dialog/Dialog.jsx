const Dialog = () => {
  return (
    <dialog className="add-cart__popup w-[396px] rounded-2xl px-5 py-6 backdrop:backdrop-brightness-50">
      <form action="#" className="grid grid-cols-2 auto-rows-min gap-x-2 gap-y-7">
        <div className="grid col-span-2">
          <div className="row-start-1 product__info--template">
            <p className="mb-3 text-l-base text-content" data-id="1r8hagdshf2m48s">
              [블루보틀] 블렌드 원두 4종
            </p>
            <span
              className="mt-4 text-l-base leading-[30px]"
              data-discountprice="25000"
              id="discountPrice"
              data-img="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/1r8hagdshf2m48s/product_thumb7_kavgysC08B.jpg"
            >
              25,000원
            </span>
          </div>
          <div className="row-start-1 flex h-[30px] w-[90px] self-end justify-self-end border border-gray-200">
            <button type="button" className="button__minus w-[30px] overflow-hidden">
              <svg role="img" width="46" height="84" viewBox="8 46 46 84">
                <use href="/icons/_sprite.svg#minus"></use>
              </svg>
            </button>
            <span className="product__amount inline-block w-[30px] text-center align-top leading-[30px]">1</span>
            <button type="button" className="button__plus w-[30px] overflow-hidden">
              <svg role="img" width="46" height="84" viewBox="8 8 46 84">
                <use href="/icons/_sprite.svg#plus"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid col-span-2 price__total--template gap-y-1">
          <span className="mt-3.5 align-bottom text-l-base">합계</span>
          <span className="text-right text-h-xl">25,000원</span>
          <div className="col-span-2 justify-self-end">
            <span className="rounded-sm bg-accent-yellow px-2 py-[3px] text-l-sm text-white">적립</span>
            <span className="inline-block w-32 leading-none text-right align-middle text-l-base">
              구매 시 13원 적립
            </span>
          </div>
        </div>
        <button
          type="reset"
          className="add-cart__button--closed button__default h-[54px] border border-gray-400 text-content"
        >
          취소
        </button>
        <button type="button" className="add-cart__button button--purple__big">
          장바구니 담기
        </button>
      </form>
    </dialog>
  );
};

export default Dialog;
