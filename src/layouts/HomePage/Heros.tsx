/* eslint-disable jsx-a11y/anchor-is-valid */
export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Ne okudun?</h1>
              <p className="lead">
                Kütüphane ekibi ne okuduğunuzu bilmek ister. İster yeni bir
                beceri öğrenmek, ister bir beceride gelişmek olsun.Sizin için en
                iyi içeriği sunacağız.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Kayıt ol
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Koleksiyonumuz her zaman değişmektedir!</h1>
              <p className="lead">
                {" "}
                Koleksiyonumuz sürekli değiştiği için günlük olarak kontrol
                etmeye çalışın! Luve 2 Read öğrencilerinize mümkün olan en doğru
                kitap seçimini sağlamak için durmadan çalışıyoruz! Kitap
                seçimimizde titiz davranırız ve kitaplarımız her zaman en büyük
                önceliğimiz olacaktır.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>
      {/* Mobile Heros*/}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>Ne okudun?</h1>
              <p className="lead">
                Kütüphane ekibi ne okuduğunuzu bilmek ister. İster yeni bir
                beceri öğrenmek, ister bir beceride gelişmek olsun.Sizin için en
                iyi içeriği sunacağız.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Kayıt ol
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Koleksiyonumuz her zaman değişmektedir!</h1>
              <p className="lead">
                {" "}
                Koleksiyonumuz sürekli değiştiği için günlük olarak kontrol
                etmeye çalışın! Luve 2 Read öğrencilerinize mümkün olan en doğru
                kitap seçimini sağlamak için durmadan çalışıyoruz! Kitap
                seçimimizde titiz davranırız ve kitaplarımız her zaman en büyük
                önceliğimiz olacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
