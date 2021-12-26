/* eslint-disable @next/next/no-html-link-for-pages */
import React , {useEffect, useState} from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import  { FIcon } from '../../data';
import Image from 'next/image';
import Button from '../../common/Button';
function Header() {
  const [open, setOpen] = useState(true);

  useEffect(()=> {
    if (process.browser) {
      if (window.innerWidth < 1055) {
        setOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    const url = window.location.href.split('/');
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }, []);

  if (process.browser) {
    window.addEventListener('resize', ()=> {
      if (window.innerWidth < 1055) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  return (
    <div className={styles.header} >
      <div className={styles.logoDiv} style={{display: 'flex',
        flexDirection: 'row', alignItems: 'center'}}>
          <Link href='/' passHref onClick={(e) => {
            e.preventDefault();
            if (process.browser) {
              if (window.innerWidth < 1055) {
                setOpen(false);
              }
            }
          }}>
            <div style={{minWidth: 50}}>
              <Image className={styles.image} src={FIcon} alt={'Respct.Club'} width={40} height={40} />
            </div>
        </Link>
      </div>

      <div
        className={styles.menu}
        onClick={() => setOpen(!open)}
      >
        {open ?
                    <>
                      <div className={styles.change1}></div>
                      <div className={styles.change2}></div>
                      <div className={styles.change3}></div>
                    </> :
                    <>
                      <div className={styles.bar1}></div>
                      <div className={styles.bar2}></div>
                      <div className={styles.bar3}></div>
                    </>
        }
      </div>
      <div style={{display: 'block', marginLeft:0}}>
        {open && (
          <>
          <div className={styles.collapse}>

            <Link 
              href='/'
              passHref
              onClick={(e) => {
                const menu = document.getElementById('menu');
                e.preventDefault();
                if (process.browser) {
                  if (window.innerWidth < 1055) {
                    setOpen(false);
                  }
                }
                menu &&
                 menu.scrollIntoView({behavior: 'smooth', block: 'start'});
                if (window.location.href!='http://localhost:3000/' && window.location.href!='https://pizzacassino.vercel.app/') {
                  location.href = '/#menu';
                }
              }}
            >
              <div className={styles.nav_item}>
                            MENU
              </div>
            </Link>
            <Link 
              href='/'
              passHref
              onClick={(e) => {
                const about = document.getElementById('aboutus');
                e.preventDefault();
                if (process.browser) {
                  if (window.innerWidth < 1055) {
                    setOpen(false);
                  }
                }
                about &&
                 about.scrollIntoView({behavior: 'smooth', block: 'start'});

                if (window.location.href!='http://localhost:3000/' && window.location.href!='https://pizzacassino.vercel.app/') {
                  location.href = '/#aboutus';
                }
              }}
            >
              <div className={styles.nav_item}>
                            ABOUT US
              </div>
            </Link>

            <Link 
              href='/'
              passHref
              onClick={(e) => {
                const blogs = document.getElementById('blogs');
                e.preventDefault();
                if (process.browser) {
                  if (window.innerWidth < 1055) {
                    setOpen(false);
                  }
                }
                blogs &&
                 blogs.scrollIntoView({behavior: 'smooth', block: 'start'});
                // window.history.pushState("blogs", "blogs", "/blogs");
                if (window.location.href!='http://localhost:3000/' && window.location.href!='https://pizzacassino.vercel.app/') {
                  location.href = '/#blogs';
                }
              }}
            >
              <div className={styles.nav_item}>
                            BLOGS
              </div>
            </Link>

            <Link href='/'
            passHref
              onClick={(e) => {
                const findus = document.getElementById('findus');
                e.preventDefault();
                if (process.browser) {
                  if (window.innerWidth < 1055) {
                    setOpen(false);
                  }
                }
                findus &&
                 findus.scrollIntoView({behavior: 'smooth', block: 'start'});
                // window.history.pushState("findus", "findus", "/findus");
                if (window.location.href!='http://localhost:3000/' && window.location.href!='https://pizzacassino.vercel.app/') {
                  location.href = '/#findus';
                }
              }}
            >
              <div className={styles.nav_item}>
                            FIND US
              </div>
            </Link>
            
            <Link href='/'
            passHref
              onClick={(e) => {
                const team = document.getElementById('team');
                e.preventDefault();
                if (process.browser) {
                  if (window.innerWidth < 1055) {
                    setOpen(false);
                  }
                }
                team &&
                 team.scrollIntoView({behavior: 'smooth', block: 'start'});
                // window.history.pushState("team", "team", "/team");
                if (window.location.href!='http://localhost:3000/' && window.location.href!='https://pizzacassino.vercel.app/') {
                  location.href = '/#team';
                }
              }}
            >
              <div className={styles.nav_item}>
                            OUR TEAM
              </div>
            </Link>
            
            <Link href='/'
                passHref
              onClick={(e) => {
                const testimony = document.getElementById('testimony');
                e.preventDefault();
                if (process.browser) {
                  if (window.innerWidth < 1055) {
                    setOpen(false);
                  }
                }
                testimony &&
                 testimony.scrollIntoView({behavior: 'smooth', block: 'start'});
                if (window.location.href!='http://localhost:3000/' && window.location.href!='https://pizzacassino.vercel.app/') {
                  location.href = '/#testimony';
                }
              }}
            >
              <div className={styles.nav_item}>
                            TESTIMONY
              </div>
            </Link>
          </div>          
          </>
        )}
      </div>

      {open && (
        <div className={styles.socials}>
        <Button text="Early Access" href="/" />

        {/* <Link href={'https://www.facebook.com/cassinocafe.FB'}>
          <a target="_blank" >
          <Image className={styles.image} src={FIcon} alt={'Respct.Club'} width={40} height={40} />
          </a>
        </Link> */}
      
      </div>
      ) }
    </div>
  );
}

export default Header;
