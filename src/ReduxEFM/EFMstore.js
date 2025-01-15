//EFMStore.js
import { createStore } from "redux";
import {EFMreducer} from './EFMreducer'
export const EFMStore = createStore(EFMreducer)