import { GeneralDataType } from './types';
const ASSETS_BASE_PATH = process.env.ASSETS_BASE_PATH || '/assets';

export const generalData: GeneralDataType = {
  portFolioTitle: `Khairul's portfolio`,
  name: `Md Khairul Islam`,
  role: `Full-stack / Backend developer`,
  personalEmail: `jonys.mailbox@gmail.com`,
  linkedInUrl: `https://www.linkedin.com/in/md-khairul-islam-jony`,
  cvFileUrl: `${ASSETS_BASE_PATH}/CV.pdf`,
};
