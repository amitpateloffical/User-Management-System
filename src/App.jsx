import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LogIn from './LogIn/LogIn'
import Dashboard from './Dashboard/Dashboard'
import DepartmentMaster from './Masters/DepartmentMaster'
import DesignationMaster from './Masters/DesignationMaster'
import RoleMaster from './Masters/RoleMaster'
import ApplicationMaster from './Masters/ApplicationMaster'
import AssetsMaster from './Masters/AssetsMaster'
import EquipmentInstrumentMaster from './Masters/EquipmentInstrumentMaster'
import ConsolidateMaster from './Masters/ConsolidateMaster'
import UserManagementRquest from './UserManagementRquest/UserManagementRquest'
import ActiveUserList from './Report/ActiveUserList'
import RequestReport from './Report/RequestReport'
import AssetsInventory from './Report/AssetsInventory'
import GxpInventory from './Report/GxpInventory'
import UserList from './Report/UserList'
import SignUpReport from './Report/SignUpReport'
import UserManagement from './CFR/UserManagement'
import AuditTrail from './CFR/AuditTrail'
import Wrapper from './Wrapper/Wrapper'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
 <>
<BrowserRouter>
<ToastContainer />
<Routes>

  <Route path='/' element={<LogIn/>}   />
  <Route path="/" element={<Wrapper />}>
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='/department-master' element={<DepartmentMaster/>} />
  <Route path='/designation-master' element={<DesignationMaster/>} />
  <Route path='/role-master' element={<RoleMaster/>} />
  <Route path='/application-master' element={<ApplicationMaster/>} />
  <Route path='/assets-master' element={<AssetsMaster/>} />
  <Route path='/equipment-master' element={<EquipmentInstrumentMaster/>} />
  <Route path='/consolidate-master' element={<ConsolidateMaster/>} />
  <Route path='/user-management-request' element={<UserManagementRquest/>} />
  <Route path='/active-users-list' element={<ActiveUserList/>} />
  <Route path='/request-report' element={<RequestReport/>} />
  <Route path='/assets-inventory' element={<AssetsInventory/>} />
  <Route path='/gxp-inventory' element={<GxpInventory/>} />
  <Route path='/user-list' element={<UserList/>} />
  <Route path='/sign-up-report' element={<SignUpReport/>} />
  <Route path='/user-management' element={<UserManagement/>} />
  <Route path='/audit-trail' element={<AuditTrail/>} />
  </Route>
</Routes>

</BrowserRouter>
 </>
  )
}

export default App
