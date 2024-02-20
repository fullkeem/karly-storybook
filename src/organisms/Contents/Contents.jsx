import Filters from '@/molecules/Filters/Filters';
import ProductBox from '@/molecules/ProductBox/ProductBox';
import Sorting from '@/molecules/Sorting/Sorting';
import 별 from '@/molecules/별/별';
import 헤드라인 from '@/molecules/헤드라인/헤드라인';
import { useQuery } from '@tanstack/react-query';

const ProductList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['list'],
    queryFn: () => fetch('http://localhost:3000/products').then((res) => res.json()),
  });

  if (isLoading) {
    return <>로딩중</>;
  }

  return (
    <>
      {data.map((item) => {
        return (
          <ProductBox
            isKalryOnly={item.isKarlyOnly}
            is한정수량={item.isLimited}
            is샛별배송={false}
            할인률={item.saleRate}
            price={item.price}
          />
        );
      })}
    </>
  );
};

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
              <ProductList />
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
