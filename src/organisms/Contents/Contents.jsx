import Filters from '@/molecules/Filters/Filters';
import Sorting from '@/molecules/Sorting/Sorting';
import 별 from '@/molecules/별/별';
import 헤드라인 from '@/molecules/헤드라인/헤드라인';

const Contents = () => {
  return (
    <>
      <div className="fixed right-[39px] top-[440px] z-20 flex h-[223px] w-[76px] flex-col items-center gap-2 border border-gray-200 bg-white p-2">
        <svg
          role="button"
          width="18"
          height="18"
          viewBox="8 8 18 18"
          className="button__prev swiper-button-disabled"
          tabIndex={-1}
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-7b6c91721078a9f52"
          aria-disabled="true"
        >
          <use href="/icons/_sprite.svg#arrows"></use>
        </svg>
        <p className="text-black text-l-sm">최근 본 상품</p>
        <div className="swiper swiper__sidebar h-[129px] w-10 swiper-initialized swiper-vertical swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-7b6c91721078a9f52"
            aria-live="polite"
            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
          >
            <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 2">
              <a href="#">
                <img
                  src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/js0aa9ql3nzgbep/thumb1_TxZAyGeLuA.jpeg"
                  alt="항정살 구이용"
                />
              </a>
            </div>
            <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 2">
              <a href="#">
                <img
                  src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/1r8hagdshf2m48s/product_thumb7_kavgysC08B.jpg"
                  alt="블렌드 원두 4종"
                />
              </a>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
        <svg
          role="button"
          width="18"
          height="18"
          viewBox="8 34 18 18"
          className="button__next"
          tabIndex={0}
          aria-label="Next slide"
          aria-controls="swiper-wrapper-7b6c91721078a9f52"
          aria-disabled="false"
        >
          <use href="/icons/_sprite.svg#arrows"></use>
        </svg>
      </div>

      <div className="pb-20">
        <헤드라인>베스트</헤드라인>
        <div className="flex justify-between mx-auto my-0 w-innerWrapper">
          <Filters />
          <div className="flex flex-col">
            <div className="list__grid mb-6 grid grid-cols-3 gap-x-[18px] gap-y-6">
              <별 />
              <Sorting />

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/1r8hagdshf2m48s/product_thumb7_kavgysC08B.jpg"
                        className="object-cover w-full h-full"
                        alt="블렌드 원두 4종"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[블루보틀] 블렌드 원두 4종</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-content">
                          25,000
                          <span>원</span>
                        </p>
                      </div>

                      <p className="text-gray-400 text-p-sm">섬세하고 다채롭게 풀어낸 향미</p>
                      <div className="flex gap-2"></div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/js0aa9ql3nzgbep/thumb1_TxZAyGeLuA.jpeg"
                        className="object-cover w-full h-full"
                        alt="항정살 구이용"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[도드람한돈] 항정살 구이용 500g (냉장)</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-accent-yellow">
                          5<span>%</span>
                        </p>
                        <p className="text-l-lg text-content">
                          27,070
                          <span>원</span>
                        </p>
                      </div>
                      <span className="text-gray-400 line-through text-p-sm">28,500 원</span>
                      <p className="text-gray-400 text-p-sm">100g당 판매가: 5,700원</p>
                      <div className="flex gap-2">
                        <span className="p-1 bg-gray-100 rounded text-l-sm text-primary">Karly Only</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/tmpp1i69yyi21zq/thumb1_tyTCvTrIZk.jpg"
                        className="object-cover w-full h-full"
                        alt="대패 삼겹살"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[도드람한돈] 대패 삼겹살 300g (냉동)</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-accent-yellow">
                          7<span>%</span>
                        </p>
                        <p className="text-l-lg text-content">
                          8,360
                          <span>원</span>
                        </p>
                      </div>
                      <span className="text-gray-400 line-through text-p-sm">8,990 원</span>
                      <p className="text-gray-400 text-p-sm">100g당 판매가: 2,997원</p>
                      <div className="flex gap-2"></div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/g32xoy95y83ty79/thumb1_L5IJ0loSNy.jpg"
                        className="object-cover w-full h-full"
                        alt="갈치"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[포트럭] 제주 손질 갈치 반마리 (왕특대) 220g (생물)</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-accent-yellow">
                          20
                          <span>%</span>
                        </p>
                        <p className="text-l-lg text-content">
                          20,720
                          <span>원</span>
                        </p>
                      </div>
                      <span className="text-gray-400 line-through text-p-sm">25,900 원</span>
                      <p className="text-gray-400 text-p-sm">두툼한 살결이 오롯이 느껴지는</p>
                      <div className="flex gap-2">
                        <span className="p-1 bg-gray-100 rounded text-l-sm text-primary">Karly Only</span>
                        <span className="p-1 bg-gray-100 rounded text-l-sm text-content">한정수량</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/musnud903ufy07p/thumb1_SN80veqJKT.jpg"
                        className="object-cover w-full h-full"
                        alt="홍가리비"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[포트럭] 국산 생물 홍가리비 700g</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-content">
                          7,200
                          <span>원</span>
                        </p>
                      </div>

                      <p className="text-gray-400 text-p-sm">제철 맞은 화려한 자태</p>
                      <div className="flex gap-2"></div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/ele9glei84aiu7c/thumb1_n9RK0Et1DI.jpeg"
                        className="object-cover w-full h-full"
                        alt="바나나"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[Dole] 스위티오 바나나 1kg</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-accent-yellow">
                          5<span>%</span>
                        </p>
                        <p className="text-l-lg text-content">
                          4,250
                          <span>원</span>
                        </p>
                      </div>
                      <span className="text-gray-400 line-through text-p-sm">4,480 원</span>
                      <p className="text-gray-400 text-p-sm">고랭지 재배로 더 달고 쫀득한 (1수/1kg내외)</p>
                      <div className="flex gap-2"></div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/om399jm5ck87r8z/thumb1_jSf7XBKemF.jpg"
                        className="object-cover w-full h-full"
                        alt="파인애플"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[Dole] 스위티오 파인애플 청크 400g</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-accent-yellow">
                          20
                          <span>%</span>
                        </p>
                        <p className="text-l-lg text-content">
                          6,000
                          <span>원</span>
                        </p>
                      </div>
                      <span className="text-gray-400 line-through text-p-sm">7,500 원</span>
                      <p className="text-gray-400 text-p-sm">손쉽게 즐기는 조각 파인애플</p>
                      <div className="flex gap-2"></div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>

              <div className="w-productBox-width h-productBox-height list_div-productBox">
                <a href="#" className="a__product">
                  <div className="relative">
                    <div className="mb-4 h-80">
                      <img
                        src="https://chapsheep.pockethost.io/api/files/qo3tzvf8q99iywt/ipop83di685lwjb/thumb1_FF16POVoCc.jpg"
                        className="object-cover w-full h-full"
                        alt="브로콜리"
                      />
                    </div>
                    <div className="flex flex-col gap-2 info">
                      <span className="text-gray-400 text-l-sm">샛별배송</span>
                      <p className="text-p-base text-content">[KF365] 브로콜리 1입</p>
                      <div className="flex gap-2">
                        <p className="text-l-lg text-accent-yellow">
                          10
                          <span>%</span>
                        </p>
                        <p className="text-l-lg text-content">
                          2,330
                          <span>원</span>
                        </p>
                      </div>
                      <span className="text-gray-400 line-through text-p-sm">2,590 원</span>
                      <p className="text-gray-400 text-p-sm">믿고 먹을 수 있는 상품을 합리적인 가격에, KF365</p>
                      <div className="flex gap-2"></div>
                    </div>
                    <button
                      type="button"
                      aria-label="장바구니 버튼"
                      className="absolute productBox__cart-button left-productBox-cart-left top-productBox-cart-top"
                    >
                      <svg role="img" width="45" height="45" viewBox="0 0 45 45 ">
                        <use href="/icons/_sprite.svg#cart"></use>
                      </svg>
                    </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex h-[600px] flex-col items-center justify-center" id="no-item">
              <svg role="img" width="72" height="72" viewBox="0 0 36 36" aria-label="">
                <use href="/icons/_sprite.svg#search-gray"></use>
              </svg>
              <p className="text-gray-600 text-p-base">해당 상품이 없습니다.</p>
            </div>
            <div className="flex justify-center text-center pt-9">
              <div className="flex border-l border-gray-100 list__div-pagination border-y" style={{ display: 'flex' }}>
                <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200">
                  <svg role="img" width="10" height="10" viewBox="3 3 10 10" aria-label="">
                    <use href="/icons/_sprite.svg#arrow-page"></use>
                  </svg>
                </button>
                <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200">
                  <svg role="img" width="10" height="10" viewBox="22 3 10 10" aria-label="">
                    <use href="/icons/_sprite.svg#arrow-page"></use>
                  </svg>
                </button>
                <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 list__button-pageNumber text-p-base text-content hover:bg-gray-200 bg-gray-200 text-primary">
                  1
                </button>
                <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 list__button-pageNumber text-p-base text-content hover:bg-gray-200">
                  2
                </button>
                <button
                  className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200"
                  id="next-arrow"
                >
                  <svg role="img" width="10" height="10" viewBox="35 3 10 10" aria-label="">
                    <use href="/icons/_sprite.svg#arrow-page"></use>
                  </svg>
                </button>
                <button className="flex h-[34px] w-[34px] items-center justify-center border-r border-gray-100 hover:bg-gray-200">
                  <svg role="img" width="10" height="10" viewBox="55 3 10 10" aria-label="">
                    <use href="/icons/_sprite.svg#arrow-page"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
