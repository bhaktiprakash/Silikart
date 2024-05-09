import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-black text-light p-3'>
      <div class="row">
        <div class="col-md-4 text-center"><p class="text-primary">Company</p>
          <p>About Us <br/> Blog <br/> Career <br/> Contact Us</p>
        </div>
        <div class="col-md-4 text-center"><p class="text-primary">Policies</p>
          <p>Privacy Policies <br/>Terms of Use <br/>Secure Posting <br/>Copyright Policies</p>
        </div>
        <div class="col-md-4 text-center"><p class="text-primary">Help</p>
        <p>Content <br/>Management <br/>Security <br/> FAQ</p>
        </div>
      </div>
      <ul class="list-unstyled list-inline text-center m-2">
      <li class="list-inline-item">
        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/facebook.png" alt="Facebook" width="32px" height="32px"/>
      </li>
      <li class="list-inline-item">
        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/linkedin.png" alt="Linkedin" width="32px" height="32px"/>
      </li>
      <li class="list-inline-item">
        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/youtube.png" alt="Youtube" width="32px" height="32px"/>
      </li>
      <li class="list-inline-item">
        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/pinterest.png" alt="Pinterest" width="32px" height="32px"/>
      </li>
      <li class="list-inline-item">
        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/instagram.png" alt="Instagram" width="32px" height="32px"/>
      </li>
    </ul>
    <p className='text-center'> Silikart  &copy; 2024</p>
      </div>
    </>
  )
}

export default Footer
