const Filters = () => {
  return (
    <form>
      <div className="list__div-filter no-scrollbar w-[220px] overflow-y-scroll py-3.5">
        <details className="border-b border-gray-100 group">
          <summary className="flex list-none items-center justify-between py-3.5 text-l-base text-content">
            <span>필터</span>
            <button className="list__button-reset text-[10px] font-light text-gray-300" type="reset">
              초기화
            </button>
          </summary>
        </details>
        <details className="border-b border-gray-100 group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
            <span>카테고리</span>
            <span className="transition group-open:rotate-180">
              <svg role="img" width="18" height="18" viewBox="8 34 18 18 ">
                <use href="/icons/_sprite.svg#arrows"></use>
              </svg>
            </span>
          </summary>
          <ul className="list__ul-filter-category pl-1 text-[14px]">
            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="면" name="면" value="면" className="appearance-none peer" />
              <label
                htmlFor="면"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="면">면</label>
              <span className="pl-2 text-gray-300 align-middle text-p-sm">4</span>
            </li>
            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="채소" name="채소" value="채소" className="appearance-none peer" />
              <label
                htmlFor="채소"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="채소">채소</label>
              <span className="pl-2 text-gray-300 align-middle text-p-sm">4</span>
            </li>
          </ul>
        </details>
        <details className="border-b border-gray-100 group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
            <span>브랜드</span>
            <span className="transition group-open:rotate-180">
              <svg role="img" width="18" height="18" viewBox="8 34 18 18 ">
                <use href="/icons/_sprite.svg#arrows"></use>
              </svg>
            </span>
          </summary>
          <ul className="list__ul-filter-brand pl-1 text-[14px]">
            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="풀무원" name="풀무원" value="풀무원" className="appearance-none peer" />
              <label
                htmlFor="풀무원"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="풀무원">풀무원</label>
              <span className="pl-2 text-gray-300 align-middle text-p-sm">3</span>
            </li>

            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="투다리" name="투다리" value="투다리" className="appearance-none peer" />
              <label
                htmlFor="투다리"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="투다리">투다리</label>
              <span className="pl-2 text-gray-300 align-middle text-p-sm">1</span>
            </li>
          </ul>
        </details>
        <details className="border-b border-gray-100 group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
            <span>가격</span>
            <span className="transition group-open:rotate-180">
              <svg role="img" width="18" height="18" viewBox="8 34 18 18 ">
                <use href="/icons/_sprite.svg#arrows"></use>
              </svg>
            </span>
          </summary>
          <ul className="pl-1 text-[14px]">
            <li className="flex items-center pt-2 pb-4">
              <input type="radio" id="price1" name="price" className="appearance-none peer" />
              <label
                htmlFor="price1"
                className="w-6 h-6 mr-2 bg-input__button bg-radio--no peer-checked:bg-radio--yes"
              ></label>
              <label htmlFor="price1">5,000원 미만</label>
            </li>
            <li className="flex items-center pt-2 pb-4">
              <input type="radio" id="price2" name="price" className="appearance-none peer" />
              <label
                htmlFor="price2"
                className="w-6 h-6 mr-2 bg-input__button bg-radio--no peer-checked:bg-radio--yes"
              ></label>
              <label htmlFor="price2">5,000원 ~ 10,000원</label>
            </li>
            <li className="flex items-center pt-2 pb-4">
              <input type="radio" id="price3" name="price" className="appearance-none peer" />
              <label
                htmlFor="price3"
                className="w-6 h-6 mr-2 bg-input__button bg-radio--no peer-checked:bg-radio--yes"
              ></label>
              <label htmlFor="price3">10,001원 ~ 15,000원</label>
            </li>
            <li className="flex items-center pt-2 pb-4">
              <input type="radio" id="price4" name="price" className="appearance-none peer" />
              <label
                htmlFor="price4"
                className="w-6 h-6 mr-2 bg-input__button bg-radio--no peer-checked:bg-radio--yes"
              ></label>
              <label htmlFor="price4">15,000원 이상</label>
            </li>
          </ul>
        </details>
        <details className="border-b border-gray-100 group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
            <span>혜택</span>
            <span className="transition group-open:rotate-180">
              <svg role="img" width="18" height="18" viewBox="8 34 18 18 ">
                <use href="/icons/_sprite.svg#arrows"></use>
              </svg>
            </span>
          </summary>
          <ul className="pl-1 text-[14px]">
            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="discount" name="discount" className="appearance-none peer" />
              <label
                htmlFor="discount"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="discount">할인 상품</label>
            </li>
          </ul>
        </details>
        <details className="border-b border-gray-100 group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
            <span>유형</span>
            <span className="transition group-open:rotate-180">
              <svg role="img" width="18" height="18" viewBox="8 34 18 18 ">
                <use href="/icons/_sprite.svg#arrows"></use>
              </svg>
            </span>
          </summary>
          <ul className="pl-1 text-[14px]">
            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="karlyOnly" name="karlyOnly" className="appearance-none peer" />
              <label
                htmlFor="karlyOnly"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="karlyOnly">Karly Only</label>
            </li>
            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="limited" name="limited" className="appearance-none peer" />
              <label
                htmlFor="limited"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="limited">한정수량</label>
            </li>
          </ul>
        </details>
        <details className="border-b border-gray-100 group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-l-base text-content">
            <span>특정상품 제외</span>
            <span className="transition group-open:rotate-180">
              <svg role="img" width="18" height="18" viewBox="8 34 18 18 ">
                <use href="/icons/_sprite.svg#arrows"></use>
              </svg>
            </span>
          </summary>
          <ul className="pl-1 text-[14px]">
            <li className="flex items-center pt-2 pb-4">
              <input type="checkbox" id="pet" name="pet" className="appearance-none peer" value="반려동물" />
              <label
                htmlFor="pet"
                className="w-6 h-6 mr-2 bg-input__button bg-check--no peer-checked:bg-check--yes"
              ></label>
              <label htmlFor="pet">반려동물 상품</label>
            </li>
          </ul>
        </details>
      </div>
    </form>
  );
};

export default Filters;
