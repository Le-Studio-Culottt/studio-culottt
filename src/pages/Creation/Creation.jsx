import '../../css/Creation/Creation.css';
import { useState } from 'react';
import { HashLink as LinkAnchor } from 'react-router-hash-link';
import { Resize } from "../../components/Resize/Resize"
import dataConception from "../../components/Creation/DataConception"
import dotsConception from "../../components/Creation/DotsConception"

export default function ConceptionMain () {
  const {windowSize} = Resize();
  const [ cardIndex, setCardIndex ] = useState(1)
  const moveIndex = index => {
      setCardIndex(index)
  }
  return (
    <>
      <main className={windowSize.innerWidth < 1201 ? "creation" : "creation desk"}>        
          <h1>Les étapes de création</h1>
            <section className="sidebar">
              {dotsConception.map((obj, index) => {
              return (
                  <LinkAnchor key={obj?.id} to={obj?.anchor} title={`Ancre posée sur ${obj?.anchor}`}>
                      <div onClick={() => moveIndex(index + 1)} className={cardIndex === index + 1 ? "active" : null}>{obj?.content}</div>
                  </LinkAnchor>
              )})}
            </section>
            <section className="cards">
              {dataConception.map((obj, index) => {
                return (
                    <LinkAnchor key={obj?.id} to={`#${obj?.idAnchor}`} title={`Ancre posée sur ${obj?.title}`}>
                        <article id={obj?.idAnchor} onClick={() => moveIndex(index + 1)} className={cardIndex === index + 1 ? `${obj?.class} active` : `${obj?.class}`}>
                            {obj?.title && <h2>{obj?.title}</h2>}
                            <p>{obj?.content}</p>
                            {obj?.content2 && <p>{obj?.content2}</p>}
                        </article>
                    </LinkAnchor>
                )})}
                <article id="convaincu" className="convaincu">
                    <p className="convaincu-talk">Convaincu ? On en discute ?</p>
                    <a href="tel:+33652183771" title="Appeler le Studio Culotté."><p className="convaincu-yes">Oui !</p></a>
                    <p className="convaincu-call">Call on me baby</p>
                </article>
            </section>
      </main>
    </>
  );
}