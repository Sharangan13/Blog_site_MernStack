export default function Register(){
    return(
        <div class="row wrapper">
		<div class="col-10 col-lg-5">
        <form class="shadow-lg" encType='multipart/form-data'>
            <h1 class="mb-3">Register</h1>

          <div class="form-group">
            <label for="email_field">Name</label>
            <input type="name" id="name_field" class="form-control" value="" />
          </div>

            <div class="form-group">
              <label for="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                class="form-control"
                value=""
              />
            </div>
  
            <div class="form-group">
              <label for="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                class="form-control"
                value=""
              />
            </div>

            <div class='form-group'>
              <label for='avatar_upload'>Avatar</label>
              <div class='d-flex align-items-center'>
                  <div>
                      <figure class='avatar mr-3 item-rtl'>
                          <img
                              src="./images/profile.jpg"
                              class='rounded-circle'
                              alt='image'
                          />
                      </figure>
                  </div>
                  <div class='custom-file'>
                      <input
                          type='file'
                          name='avatar'
                          class='custom-file-input'
                          id='customFile'
                      />
                      <label class='custom-file-label' for='customFile'>
                          Choose Avatar
                      </label>
                  </div>
              </div>
          </div>
  
            <button
              id="register_button"
              type="submit"
              class="btn btn-block py-3"
            >
              REGISTER
            </button>
          </form>
		  </div>
    </div>
    )
}