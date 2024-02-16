const Footer = () => {
  return (
    <footer className="border mt-7 border-t-gray-100">
      <div className="flex justify-between mx-auto my-7 w-innerWrapper text-content">
        <div>
          <h2 className="test text-h-lg">고객행복센터</h2>
          <span className="mt-4 text-h-2xl">
            <a href="#">1644-1107</a>
          </span>
          <span className="inline-block mt-4 ml-2 align-top test text-l-base">월~토요일 오전 7시 - 오후 6시</span>
          <ul className="my-5">
            <li className="flex">
              <button type="button" className="mr-4 button--footer">
                카카오톡 문의
              </button>
              <div>
                <p className="text-p-base">월~토요일 | 오전 7시 - 오후 6시</p>
                <p>일/공휴일 | 오전 7시 - 오후 1시</p>
              </div>
            </li>
            <li className="flex my-7">
              <button type="button" className="mr-4 button--footer">
                1:1 문의
              </button>
              <div>
                <p>365일</p>
                <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
              </div>
            </li>
            <li className="flex">
              <a href="#" target="_blank" className="block mr-4 text-center button--footer">
                대량주문 문의
              </a>
              <div>
                <p>월~금요일 | 오전 9시 - 오후 6시</p>
                <p>점심시간 | 낮 12시 - 오후 1시</p>
              </div>
            </li>
          </ul>
          <p>
            비회원 문의 :
            <a href="#" className="text-primary">
              help@karlycorp.com
            </a>
          </p>
          <p>
            비회원 대량주문 문의 :
            <a href="#" className="text-primary">
              help@karlycorp.com
            </a>
          </p>
        </div>
        <div>
          <nav>
            <ul className="flex gap-x-3 text-p-base">
              <li>
                <a href="#">칼리 소개</a>
              </li>
              <li>
                <a href="#">칼리 소개 영상</a>
              </li>
              <li>
                <a href="#">인재 채용</a>
              </li>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">개인정보처리방침</a>
              </li>
              <li>
                <a href="#">이용안내</a>
              </li>
            </ul>
          </nav>
          <address className="not-italic my-7 text-p-sm">
            <div>
              <span>법인명 (상호) : 주식회사 칼리</span>
              <span aria-hidden="true">|</span>
              <span>사업자등록번호 : 261-81-23467</span>
              <span aria-hidden="true">|</span>
              <span>
                <a href="#" className="text-primary">
                  사업자정보 확인
                </a>
              </span>
            </div>
            <div>
              <span>통신판매업 : 제 2018-서울강남-01646호</span>
              <span aria-hidden="true">|</span>
              <span>개인정보보호책임자 : 이원준</span>
            </div>
            <div>
              <span>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</span>
              <span aria-hidden="true">|</span>
              <span>대표이사 : 김슬아</span>
            </div>
            <div>
              <span>입점문의 : 입점문의하기</span>
              <span aria-hidden="true">|</span>
              <span>
                제휴문의 :
                <a href="#" className="text-primary">
                  business@karlycorp.com
                </a>
              </span>
            </div>
            <span className="block">
              채용문의 :
              <a href="#" className="text-primary">
                recruit@karlycorp.com
              </a>
            </span>
            <span>팩스 : 070 - 7500 - 6098</span>
          </address>
          <ul className="flex gap-x-5">
            <li className="w-[30px] overflow-hidden">
              <a href="#" target="_blank">
                <svg
                  role="img"
                  width={188}
                  height={30}
                  viewBox="0 0 376 60"
                  aria-label="마켓칼리 네이버블로그 바로가기"
                >
                  <use href="/icons/_sprite.svg#sns" />
                </svg>
              </a>
            </li>
            <li className="w-[30px] overflow-hidden">
              <a href="#" target="_blank">
                <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓칼리 인스타그램 바로가기" />
              </a>
            </li>
            <li className="w-[30px] overflow-hidden">
              <a href="#" target="_blank">
                <svg role="img" width={188} height={30} viewBox="158 0 376 60" aria-label="마켓칼리 페이스북 바로가기">
                  <use href="/icons/_sprite.svg#sns" />
                </svg>
              </a>
            </li>
            <li className="w-[30px] overflow-hidden">
              <a href="#" target="_blank">
                <svg
                  role="img"
                  width={188}
                  height={30}
                  viewBox="237 0 376 60"
                  aria-label="마켓칼리 네이버포스트 바로가기"
                >
                  <use href="/icons/_sprite.svg#sns" />
                </svg>
              </a>
            </li>
            <li className="w-[30px] overflow-hidden">
              <a href="#" target="_blank">
                <svg role="img" width={188} height={30} viewBox="316 0 376 60" aria-label="마켓칼리 유튜브 바로가기">
                  <use href="/icons/_sprite.svg#sns" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="mx-auto mt-8 flex w-innerWrapper justify-between border-t border-gray-100 pb-7 pt-6 text-[10px] leading-[160%]">
        <li className="flex gap-x-2">
          <div className="inline-block w-[34px] overflow-hidden">
            <svg role="img" width={277} height={36} viewBox="0 0 277 36" aria-label="isms 로고">
              <use href="/icons/_sprite.svg#footer" />
            </svg>
          </div>
          <div className="w-[180px]">
            <p>[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영(심사받지 않은 물리적 인프라 제외)</p>
            <p>[유효기간] 2022.01.19 ~ 2025.01.18</p>
          </div>
        </li>
        <li className="flex gap-x-2">
          <div className="inline-block w-[34px] overflow-hidden">
            <svg role="img" width={277} height={36} viewBox="58 0 277 36" aria-label="eprivacy plus 로고">
              <use href="/icons/_sprite.svg#footer" />
            </svg>
          </div>
          <div className="w-[180px]">
            <p>개인정보보호 우수 웹사이트</p>
            <p>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
          </div>
        </li>
        <li className="flex gap-x-2">
          <div className="inline-block w-[102px] overflow-hidden">
            <svg role="img" width={277} height={36} viewBox="115 0 277 36" aria-label="payments 로고">
              <use href="/icons/_sprite.svg#footer" />
            </svg>
          </div>
          <div className="w-[135px]">
            <p>토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</p>
          </div>
        </li>
        <li className="flex gap-x-2">
          <div className="inline-block w-[38px] overflow-hidden">
            <svg role="img" width={277} height={36} viewBox="240 0 277 36" aria-label="우리은행 로고">
              <use href="/icons/_sprite.svg#footer" />
            </svg>
          </div>
          <div className="w-[205px]">
            <p>
              고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
          </div>
        </li>
      </ul>
      <div className="min-w-max bg-gray-50 pb-7 pt-5 text-center text-[10px] leading-[160%] text-gray-400">
        <p>
          마켓칼리에서 판매되는 상품 중에는 마켓칼리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이
          포함되어 있습니다.
        </p>
        <p>
          마켓플레이스(오픈마켓) 상품의 경우 칼리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 칼리는 해당 상품의
          주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        </p>
        <small className="mt-2 capitalize">© karly corp. all rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
