import React from 'react'
import SideBar from './SideBar'
import {useHistory } from 'react-router-dom'


const Media = () => {
  const loginFromStorage = JSON.parse(localStorage.getItem('login'))
  const userName = loginFromStorage.userId

  const history = useHistory()
  const onLogout = (e) => {
    e.preventDefault()
      localStorage.removeItem('login')
      history.push('/login')
  }
    return (
      <div className="body0">
  <div className="adminbody">
    <div id="main">
      {/* top bar navigation */}
      {/* End Navigation */}
      {/* Left Sidebar */}
      <SideBar/>
      {/* End Sidebar */}
      <div className="content-page">
        {/* Start content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-holder">
                <img src='assets/img/logo/logo4.jpg' width="180" height="50" />                  <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><b style={{fontSize:"22px" , color:"black "}}>{userName}</b></li>
                  <li className="breadcrumb-item"><b>Accueil</b></li> 
                  <li className="breadcrumb-item active"><b style={{color:"red"}}>Medias</b></li>
                  <li className="list-inline-item dropdown notif">
              <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
              <img src="assets/img/logo/woman.png" alt="Profile image" className="avatar-rounded" />
              </a>
              <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                {/* item*/}
                <div className="dropdown-item noti-title">
                  <h5 className="text-overflow">
                  <small>Bonjour, {userName} </small>
                  </h5>
                </div>
                {/* item*/}
                <a href="/" className="dropdown-item notify-item">
                  <i className="fas fa-user" />
                  <span>Accueil</span>
                </a>
                {/* item*/}
                <a href="#" className="dropdown-item notify-item" onClick={(e) => {onLogout(e)}}>
                  <i className="fas fa-power-off" />
                  <span>Déconnexion</span>
                </a>
              </div>
            </li>
                  </ol>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card mb-3">
                  <div className="card-header">
                    <span className="pull-right">
                      <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal_add_user">
                        <i className="fas fa-user-plus" aria-hidden="true" /> Add new user</button>
                    </span>
                    <div className="modal fade custom-modal" tabIndex={-1} role="dialog" aria-labelledby="modal_add_user" aria-hidden="true" id="modal_add_user">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <form action="#" method="post" encType="multipart/form-data">
                            <div className="modal-header">
                              <h5 className="modal-title">Add new user</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label>Full name (required)</label>
                                    <input className="form-control" name="name" type="text" required />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Valid Email (required)</label>
                                    <input className="form-control" name="email" type="email" required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Password (required)</label>
                                    <input className="form-control" name="password" type="text" required />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Role</label>
                                    <select name="role_id" className="form-control" required>
                                      <option value>- select -</option>
                                      <optgroup label="Staff member">
                                        <option value={1}>Administrator</option>
                                        <option value={2}>Manager</option>
                                        <option value={3}>Author</option>
                                      </optgroup>
                                      <optgroup label="Registered member">
                                        <option value={4}>User</option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Skype (optional)</label>
                                    <input className="form-control" name="skype" type="text" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Email verified</label>
                                    <select name="email_verified" className="form-control">
                                      <option value={1}>YES</option>
                                      <option value={0}>NO</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Active</label>
                                    <select name="active" className="form-control">
                                      <option value={1}>YES</option>
                                      <option value={0}>NO</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label>Avatar image (optional):</label>
                                <br />
                                <input type="file" name="image" />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary">Add user</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <h3>
                      <i  className="fas fa-photo-video" /> Toutes les Médias</h3>
                  </div>
                  {/* end card-header */}
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th style={{minWidth: 300}}>User details</th>
                            <th style={{width: 120}}>Role</th>
                            <th style={{minWidth: 110}}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="user_avatar_list d-none d-none d-lg-block"><img alt="image" src="assetss/images/avatars/avatar_small.png" /></div>
                              <h4>Demo Administrator</h4>
                              <p>webmaster@website.com</p>
                              <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                            </td>
                            <td>Administrator</td>
                            <td>
                              <a href="#" className="btn btn-primary btn-sm btn-block"><i className="far fa-edit" /> Edit</a>
                              <a href="#" className="btn btn-danger btn-sm btn-block mt-2"><i className="fas fa-trash" /> Delete</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="user_avatar_list d-none d-none d-lg-block"><img alt="image" src="assetss/images/avatars/avatar_small.png" /></div>
                              <h4>Gabriel John</h4>
                              <p>webmaster@website.com</p>
                              <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                            </td>
                            <td>Author</td>
                            <td>
                              <a href="#" className="btn btn-primary btn-sm btn-block"><i className="far fa-edit" /> Edit</a>
                              <a href="#" className="btn btn-danger btn-sm btn-block mt-2"><i className="fas fa-trash" /> Delete</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="user_avatar_list d-none d-none d-lg-block"><img alt="image" src="assetss/images/avatars/avatar_small.png" /></div>
                              <h4>Test Author</h4>
                              <p>user@website.com</p>
                              <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                            </td>
                            <td>Author</td>
                            <td>
                              <a href="#" className="btn btn-primary btn-sm btn-block"><i className="far fa-edit" /> Edit</a>
                              <a href="#" className="btn btn-danger btn-sm btn-block mt-2"><i className="fas fa-trash" /> Delete</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="user_avatar_list d-none d-none d-lg-block">
                                <img alt="image" src="assetss/images/avatars/avatar_small.png" />
                              </span>
                              <h4>Test Manager</h4>
                              <p>manager@website.com</p>
                              <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                            </td>
                            <td>Manager</td>
                            <td>
                              <a href="#" className="btn btn-primary btn-sm btn-block"><i className="far fa-edit" /> Edit</a>
                              <a href="#" className="btn btn-danger btn-sm btn-block mt-2"><i className="fas fa-trash" /> Delete</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="user_avatar_list d-none d-none d-lg-block"><img alt="image" src="assetss/images/avatars/avatar_small.png" /></div>
                              <h4>Admin 2</h4>
                              <p>admin2@website.com</p>
                              <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                            </td>
                            <td>Administrator</td>
                            <td>
                              <a href="#" className="btn btn-primary btn-sm btn-block"><i className="far fa-edit" /> Edit</a>
                              <a href="#" className="btn btn-danger btn-sm btn-block mt-2"><i className="fas fa-trash" /> Delete</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* END container-fluid */}
        </div>
        {/* END content */}
      </div>
      {/* END content-page */}
    </div>
  </div>  
</div>

    )
}

export default Media
