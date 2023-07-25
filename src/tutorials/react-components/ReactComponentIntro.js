import React from 'react'
/********************/
import { FunctionComponent1 } from "./function-component"
import { FunctionComponent2 } from "./function-component"
import { FunctionComponent3 } from "./function-component"
import { FunctionComponent4 } from "./function-component"

const ReactComponentIntro = () => {
    const fn1 = FunctionComponent1()

  console.log(fn1)
  return (
    <div>
        {fn1}
      {FunctionComponent1()}

      <FunctionComponent1 />

      {FunctionComponent2({ title: "Hello Function Component", message: "props introduction" })}

      <FunctionComponent2 title={'FC2 JSX'} message='Use Function Component with JSX' />

      <FunctionComponent3 title={'FC3'} message={'Destructured props'} />

      <FunctionComponent4 title={'FC4'} message={'Used with content'} >
        <p>
        ;ken;gkero;gone;rn;ken;kgrn;nergne;krn iregj;okremg ;okn oigrj ;knr ;kr 
        gr ;ojr poijg ;korm g'krijgn k nergner gokrneg
        w rgl;jenfg;kn;kelfg;km g;ker; kgmkemf' em.
        </p>
        <p>
        ;ken;gkero;gone;rn;ken;kgrn;nergne;krn iregj;okremg ;okn oigrj ;knr ;kr 
        gr ;ojr poijg ;korm g'krijgn k nergner gokrneg
        w rgl;jenfg;kn;kelfg;km g;ker; kgmkemf' em.
        </p>
        <p>
        ;ken;gkero;gone;rn;ken;kgrn;nergne;krn iregj;okremg ;okn oigrj ;knr ;kr 
        gr ;ojr poijg ;korm g'krijgn k nergner gokrneg
        w rgl;jenfg;kn;kelfg;km g;ker; kgmkemf' em.
        </p>
        <FunctionComponent1/>
      </FunctionComponent4>

    </div>
  )
}

export default ReactComponentIntro