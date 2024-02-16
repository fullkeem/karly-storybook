const Header = () => {
  return (
    <header className="mx-auto my-0 w-innerWrapper">
      <h1 className="sr-only">마켓칼리</h1>
      <div className="flex items-center justify-end header__div-top h-13">
        <a href="#" className="px-3 text-p-sm text-primary">
          회원가입
        </a>
        <div className="h-3.25 w-px border-r text-gray-divider"></div>
        <a href="#" className="px-3 text-p-sm text-content">
          로그인
        </a>
        <div className="h-3.25 w-px border-r text-gray-divider"></div>
        <div className="relative flex items-center h-full gap-1 px-3 cursor-pointer group text-p-sm text-content">
          <span>고객센터</span>
          <svg role="img" width="8" height="5.6" viewBox="0 0 11 7">
            <use href="/icons/_sprite.svg#down"></use>
          </svg>
          <div className="absolute z-10 invisible w-32 p-2 bg-white border group right-3 top-10 border-gray-divider group-hover:visible">
            <ul className="flex flex-col gap-1 list-none">
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">자주하는 질문</a>
              </li>
              <li>
                <a href="#">1:1 문의</a>
              </li>
              <li>
                <a href="#">대량주문 문의</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-3.25 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#">
            <svg role="img" width="82" height="42" viewBox="0 0 82 42">
              <use href="/logo.svg#logo"></use>
              <title>마켓칼리 로고</title>
            </svg>
          </a>
          <a href="#" className="text-l-lg text-primary">
            마켓칼리
          </a>
          <div className="h-3.5 border-r text-gray-divider"></div>
          <a href="#" className="text-gray-400 text-l-lg">
            뷰티칼리
          </a>
        </div>
        <div className="relative">
          <form>
            <input
              type="text"
              name="keyword"
              className="px-5 py-3 text-gray-400 border rounded w-100 border-primary text-p-lg focus:outline-primary"
              placeholder="검색어를 입력해주세요"
            />
            <button type="submit">
              <svg className="absolute right-5 top-3" role="img" width="36" height="36" viewBox="0 0 36 36">
                <use href="/icons/_sprite.svg#search"></use>
              </svg>
            </button>
          </form>
        </div>
        <div className="relative flex gap-5">
          <button type="button">
            <svg role="img" width="36" height="36" viewBox="0 0 36 36">
              <use href="/icons/_sprite.svg#icons"></use>
            </svg>
          </button>
          <button type="button">
            <svg role="img" width="36" height="36" viewBox="56 0 36 36">
              <use href="/icons/_sprite.svg#icons"></use>
            </svg>
          </button>
          <a href="#" className="relative header__a-cart-origin">
            <svg role="img" width="36" height="36" viewBox="112 0 36 36">
              <use href="/icons/_sprite.svg#icons"></use>
            </svg>

            <div className="header__cart-badge absolute -right-1 top-0.5 rounded-full bg-primary px-[5px] text-center text-[9px] text-white">
              13
            </div>
          </a>
          <div className="header__bubble absolute right-0 top-12 z-10 hidden h-[100px] w-[254px] animate-bubble-fadeIn border border-gray-200 bg-white p-5">
            <figure className="flex gap-5">
              <img src="" alt="" className="header__bubble-img h-[60px] w-[46px]" />
              <div>
                <figcaption className="mb-2 text-gray-300 header__bubble-figcaption text-l-sm"></figcaption>
                <p className="header__bubble-p text-p-sm text-content">장바구니에 상품을 담았습니다.</p>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <nav className="flex items-center justify-between h-18">
        <div className="relative flex items-center gap-3 group h-18">
          <svg role="img" width="16" height="14" viewBox="0 0 16 14">
            <use href="/icons/_sprite.svg#hamburger-black"></use>
          </svg>
          <span>카테고리</span>
          <div className="invisible absolute left-0 top-18 z-20 w-61.75 border-b border-l border-r border-gray-divider bg-white px-3 py-2 group-hover:visible">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="21 18 59 61">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>선물하기</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="21 744 59.8 65.5">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>채소</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="10 1317 80 54">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>과일 · 견과 · 쌀</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="22 1716 58 67">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>수산 · 해산 · 건어물</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="17 265 68 55">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>정육 · 계란</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="17 586 67 61">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>국 · 반찬 · 메인요리</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="17 1155 70 58">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>샐러드 · 간편식</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="20 828 63 63">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>면 · 양념 · 오일</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="24 429 66 37">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>생수 · 음료 · 우유 · 커피</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="18 989 64 62">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>간식 · 과자 · 떡</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="18 186 68 49">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>베이커리 · 치즈 · 델리</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="13 1630 75 70">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>건강식품</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="22 1472 57 70">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>와인</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="21 95 58 69">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>전통주</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="21 336 50 75">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>생활용품 · 리빙 · 캠핑</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="17 503 67 62">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>스킨케어 · 메이크업</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="19 1391 63 68">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>헤어 · 바디 · 구강</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="19 664 62 64">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>주방용품</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="23 904 54 69">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>가전제품</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="21 1070 57 64">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>반려동물</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="22 1228 57 70">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>베이비 · 키즈 · 완구</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-2">
                  <svg role="img" width="24" height="24" viewBox="17 1556 67 59">
                    <use href="/icons/_sprite.svg#menuIcon"></use>
                  </svg>
                  <span>여행 · 티켓</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex">
          <li className="px-13.5 py-2">
            <a href="#">신상품</a>
          </li>
          <li className="px-13.5 py-2">
            <a href="#">베스트</a>
          </li>
          <li className="px-13.5 py-2">
            <a href="#">알뜰쇼핑</a>
          </li>
          <li className="px-13.5 py-2">
            <a href="#">특가/혜택</a>
          </li>
        </ul>
        <a className="px-2 py-1 border border-gray-300 rounded-3xl" href="#">
          <span className="text-p-sm text-primary">샛별·낮</span>
          <span className="text-gray-500 text-p-sm">배송안내</span>
        </a>
      </nav>
      <div className="fixed top-0 left-0 right-0 z-20 hidden bg-white header__div-simple shadow-Below/Low">
        <nav className="flex items-center justify-between gap-2 mx-auto my-0 h-18 w-innerWrapper">
          <div className="relative flex items-center gap-3 group h-18">
            <svg role="img" width="16" height="14" viewBox="0 0 16 14">
              <use href="/icons/_sprite.svg#hamburger-black"></use>
            </svg>
            <span>카테고리</span>
            <div className="invisible absolute left-0 top-18 z-10 w-61.75 border-b border-l border-r border-gray-divider bg-white px-3 py-2 group-hover:visible">
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="21 18 59 61">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>선물하기</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="21 744 59.8 65.5">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>채소</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="10 1317 80 54">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>과일 · 견과 · 쌀</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="22 1716 58 67">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>수산 · 해산 · 건어물</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="17 265 68 55">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>정육 · 계란</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="17 586 67 61">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>국 · 반찬 · 메인요리</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="17 1155 70 58">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>샐러드 · 간편식</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="20 828 63 63">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>면 · 양념 · 오일</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="24 429 66 37">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>생수 · 음료 · 우유 · 커피</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="18 989 64 62">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>간식 · 과자 · 떡</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="18 186 68 49">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>베이커리 · 치즈 · 델리</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="13 1630 75 70">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>건강식품</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="22 1472 57 70">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>와인</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="21 95 58 69">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>전통주</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="21 336 50 75">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>생활용품 · 리빙 · 캠핑</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="17 503 67 62">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>스킨케어 · 메이크업</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="19 1391 63 68">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>헤어 · 바디 · 구강</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="19 664 62 64">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>주방용품</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="23 904 54 69">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>가전제품</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="21 1070 57 64">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>반려동물</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="22 1228 57 70">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>베이비 · 키즈 · 완구</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex gap-2">
                    <svg role="img" width="24" height="24" viewBox="17 1556 67 59">
                      <use href="/icons/_sprite.svg#menuIcon"></use>
                    </svg>
                    <span>여행 · 티켓</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex">
            <li className="px-12 py-2">
              <a href="#">신상품</a>
            </li>
            <li className="px-12 py-2">
              <a href="#">베스트</a>
            </li>
            <li className="px-12 py-2">
              <a href="#">알뜰쇼핑</a>
            </li>
            <li className="px-12 py-2">
              <a href="#">특가/혜택</a>
            </li>
          </ul>
          <div className="relative">
            <input
              type="text"
              className="w-48.5 rounded border border-primary px-5 py-2 text-p-sm text-gray-400 focus:outline-primary"
              placeholder="검색어를 입력해주세요"
            />
            <button type="button">
              <svg className="absolute top-0 right-5" role="img" width="36" height="36" viewBox="0 0 36 36">
                <use href="/icons/_sprite.svg#search"></use>
              </svg>
            </button>
          </div>
          <div className="relative flex gap-5">
            <button type="button">
              <svg role="img" width="36" height="36" viewBox="0 0 36 36">
                <use href="/icons/_sprite.svg#icons"></use>
              </svg>
            </button>
            <button type="button">
              <svg role="img" width="36" height="36" viewBox="56 0 36 36">
                <use href="/icons/_sprite.svg#icons"></use>
              </svg>
            </button>
            <a href="#" className="relative header__a-cart-simple">
              <svg role="img" width="36" height="36" viewBox="112 0 36 36">
                <use href="/icons/_sprite.svg#icons"></use>
              </svg>

              <div className="header__cart-badge absolute -right-1 top-0.5 rounded-full bg-primary px-[5px] text-center text-[9px] text-white">
                13
              </div>
            </a>
            <div className="header__bubble absolute right-0 top-12 z-10 hidden h-[100px] w-[254px] animate-bubble-fadeIn border border-gray-200 bg-white p-5">
              <figure className="flex gap-5">
                <img src="" alt="" className="header__bubble-img h-[60px] w-[46px]" />
                <div>
                  <figcaption className="mb-2 text-gray-300 header__bubble-figcaption text-l-sm"></figcaption>
                  <p className="header__bubble-p text-p-sm text-content">장바구니에 상품을 담았습니다.</p>
                </div>
              </figure>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
