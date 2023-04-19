import React from "react";

const Home = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row content">
        <div className="col-sm-2 sidenav"></div>
        <div className="col-sm-8 text-left">
          <h1>Dobrodošli!</h1>
          <img
            className="img-fluid"
            src="https://www.skolaskijanja.rs/wp-content/uploads/2019/10/izbor-skija.jpg"
            alt="neka slika"
          />
          <hr />
          <p
            style={{
              fontStyle: "italic",
            }}
          >
            Kupovina ski opreme predstavlja ozbiljan zadatak kojem bi trebalo posvetiti potpunu pažnju. Pre same kupovine, vrlo je važno da odredite vrstu skija koja vama odgovara, koja vam je samim tim i potrebna. Skije se razlikuju u odnosu na vrstu terena za koje su namenjene, i u odnosu na stil kretanja kojem pripadate. Neki od osnovnih kriterijuma na osnovu kojih se vrši odabir skija je stepen spremnosti, odnosno iskustva u vožnji. Pored toga vaša visina i težina su isto tako važne informacije koje bi trebalo da uzmete u obzir.

Kupovina prvih skija bi trebalo da bude rezervisana za trenutak kada donekle ovladate svojom ski tehnikom, tj. kada naučite neke osnovne stvari u kretnju. Beosport vam nudi savršen izbor skija za muškarce, žene i skija za decu, namenjenih za gotovo sve podloge. Ukoliko volite kretanje po svim vrstama terena, u okviru naše ponude pronaći ćete skije koje će vam to i omogućiti. Ukoliko tek ovladavate nešto naprednijim skijaškim pokretima, mi znamo koji model skija će vam u tome pomoći.

Svi najpoznatiji svetski brendovi, Atomic i Salomon nalaze se na jednom mestu i to u nasoj ponudi.
          </p>
        </div>
        <div className="col-sm-2 sidenav"></div>
      </div>
    </div>
  );
};

export default Home;