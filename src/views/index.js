/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {HeaderSection} from './header-section'
import {AddButton} from './add-button'
import {SubButton} from './sub-button'
import { WhiteBoard } from './whiteboard/main'

export const view = (state, actions) =>
  <div class='container'>
    <HeaderSection />
    <h1>{state.count}</h1>
    <AddButton actions={actions} />
    <SubButton actions={actions} />
    <WhiteBoard />
  </div>
