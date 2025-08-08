import deploying2 from "../Images/deploying.png"
// import Solvepyton from './Solvepyton';
function deploying() {
    function Heading({ text }) {
        return (
            <h3 className="blog-page-hading">{text}</h3>
        );
    }
    return (
        <>
            <div className="container" >
                <div className="">

                    <img src={deploying2} className="blog-page-img" />
                    <h1 className="blog-page-text2">How to host a Next.js app in Production on an Ubuntu VPS</h1>
                    <p className="blog-page-content2 border-zinc-500 ">""Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting."
                    </p>
                    <p className="blog-page-content2 border-0 p-0 w-100 mt-3 text-dark">In this guide, we'll walk through the process of hosting a Next.js app in production using NGINX and PM2. Follow these steps to get your Next.js app up and running smoothly..</p>
                    <p className="">If your application uses MongoDB, you can install it from here.</p>
                    <Heading text="Step 1: Installing Necessary Packages" />
                    {/* <h3 className="blog-page-hading">Step 1: Installing Necessary Packages</h3> */}
                    <p className="blog-page-content2 border-0 p-0 text-dark"> First, let's ensure our server has the required packages installed. Open a terminal and run the following commands: </p>
                    <ol>
                        <li>
                            <strong> Update APT: </strong></li>

                        <code className="p-0 m-0">
                            <spen className="text-warning" >  apn </spen>
                            <spen className="text-primary">   update</spen>
                        </code>
                        <li>
                            <strong>  Install Nginx:</strong> </li>
                        <code className="p-0 m-0">
                            <spen className="text-warning" >  apn </spen>
                            <spen className="text-primary">   apt install nginx -y</spen>
                        </code>
                        <p> This command installs Nginx web server.</p>

                        <li>
                            <strong> Setup Node.js 21.x repository:</strong>
                            <code className="p-0 m-0">
                                <spen className="text-warning" >  curl </spen>
                                <spen className="text-primary"> -fsSL https://deb.nodesource.com/setup_21.x </spen>
                                <spen className="text-warning"> | sudo -E bash - </spen>
                            </code>
                            <p>This command downloads and runs the script to add the Node.js 21.x repository to your system.</p>

                        </li>
                        <li>
                            <strong>Install Node.js: </strong>
                            <code className="p-0 m-0">
                                <spen className="text-warning" > sudo </spen>
                                <spen className="text-primary">  apt-get install -y nodejs</spen>
                            </code>
                            <p>This command installs Node.js using the newly added repository.</p>

                        </li>
                        <li>
                            <strong> Install PM2 globally:</strong>
                            <code className="p-0 m-0">
                                <spen className="text-warning" > pemo</spen>
                                <spen className="text-primary">  install -g pm2</spen>
                            </code>
                            <p>This command installs PM2 process manager globally using npm.</p>

                        </li>
                    </ol>
                    <Heading text="Step 2: Setting Up Next.js App" />
                    <p> Now, let's prepare our Next.js app. Navigate to your project directory and execute the following commands:</p>





                    <ol>
                        <li >
                            <code className="p-0 m-0" style={{ height: "70px" }}>
                                <ul>
                                    <spen className="text-warning" >npm  </spen>
                                    <spen className="text-primary" >install ,</spen>
                                </ul>
                                <ul>
                                    <spen className="text-warning" >  npm</spen>
                                    <spen className="text-primary">   run build,</spen>
                                </ul>
                                <ul>
                                    <spen className="text-warning" >npm  </spen>

                                    <spen className="text-primary">   run start</spen>
                                </ul>
                            </code>

                        </li>



                    </ol>

                    <Heading text={"Step 3: Configuring NGINX"} />
                    <p > Create this directory for storing access and error logs:</p>


                    <code className="p-0 m-0">
                        <spen className="text-warning" > mkdir</spen>
                        <spen className="text-primary">  -p /opt/nextjs/logs/</spen>
                    </code>
                    <p>Create a new NGINX configuration file for your Next.js app. Open a text editor and paste the following configuration:</p>
                    {/* 
        <code>
            <p> server {</p>
            <p> server_name getmeachai.com;</p>
            <p> access_log /opt/nextjs/logs/access.log;</p>
            <p>  error_log /opt/nextjs/logs/error.log error;</p>
            <p>  location /_next/ {</p>
                <p>    alias /home/getmeachai/.next/;</p>
                <p>  expires 30d;</p>
                <p>   access_log on;</p>
                <p>  }</p>
                <p>   location / { </p>
                    <p> proxy_pass http://localhost:3000;</p>
                    <p>  proxy_http_version 1.1;</p>
                    <p> proxy_set_header Upgrade $http_upgrade;</p>
<p> proxy_set_header Connection 'upgrade';</p>
<p>  proxy_set_header Host $host;</p>

<p>  proxy_cache_bypass $http_upgrade;</p>
<p>{</p>
<p>{</p>



</code> */}
                    <Heading text={" Step 4: Configuring PM2"} />
                    <p> Create an ecosystem configuration file for PM2. Open a text editor and paste the following configuration:</p>


                    <Heading text={" Step 5: Starting PM2"} />
                    <p> Start your Next.js app using PM2 by running the following command in your project directory:</p>
                    <code className="p-0 m-0">
                        <spen> pm2 start</spen>
                        <spen>  ecosystem.config.js</spen>
                    </code>

                    <Heading text={"[Optional] Using Certbot for HTTPS"} />
                    <p> Securing your Next.js application with HTTPS is crucial for protecting sensitive data and ensuring user trust. Certbot is a widely used tool for obtaining and managing SSL/TLS certificates from the Let's Encrypt Certificate Authority. Follow these steps to set up HTTPS for your Next.js app using Certbot:</p>
                    <Heading className=""> Step 1: Install Certbot</Heading>
                    <code className="p-0 m-0" style={{ height: "60px" }}>
                        <span className="text-warning">sudo </span>
                        <span className="text-primary">apt update</span>


                        <p>
                            <span className="text-warning">sudo apt </span>
                            <span className="text-primary">install python3-certbot-nginx</span>
                        </p>
                    </code>
                    <Heading text={"Step 2: Obtain SSL Certificate"} />
                    <code className="p-0 m-0">
                        <span className="text-warning">sudo </span>
                        <span className="text-primary"> certbot --nginx -d getmeachai.com</span>
                    </code>
                    <p> Follow the prompts to provide an email address for renewal reminders and agree to the terms of service. Certbot will handle the certificate issuance and configuration for NGINX.</p>


                    <Heading text={"Step 3: Verify HTTPS Configuration"} />
                    <code className="p-0 m-0">
                        <span className="text-warning">sudo </span>
                        <span className="text-primary">nginx -t</span>
                    </code>
                    <p> If the test is successful, reload NGINX to apply the changes:</p>
                    <code className="p-0 m-0">
                        <span className="text-warning"> sudo</span>
                        <span className="text-primary">systemctl reload nginx</span>
                    </code>

                    <Heading text={"Step 4: Automate Certificate Renewal"} />
                    <code className="p-0 m-0">
                        <span className="text-warning"> sudo </span>
                        <span className="text-primary">systemctl enable certbot.timer</span>
                    </code>
                    <p> This command ensures that Certbot will renew your certificates automatically when they are about to expire.</p>
                    <Heading text={"Step 5: Verify Renewal"} />
                    <code className="p-0 m-0">
                        <span className="text-warning"> sudo </span>
                        <span className="text-primary"> certbot renew --dry-run</span>
                    </code>
                    <p> If the dry run completes without errors, you're all set. Certbot will handle certificate renewal automatically when necessary.</p>
                    <Heading text={"Step 6: Test HTTPS Connection"} />
                    <p className="blog-page-content2 border-0 p-0 text-dark"> Finally, test your Next.js application over HTTPS to ensure that everything is working correctly. You can do this by navigating to your domain in a web browser and verifying that the connection is secure.</p>
                    <p className="blog-page-content2 border-0 p-0 text-dark"> By following these steps, you can secure your Next.js application with HTTPS using Certbot, enhancing security and trust for your users.</p>
                    <Heading text={"Conclusion"} />
                    <p> Your Next.js app is now ready and running in production! NGINX is serving as a reverse proxy, forwarding requests to your Next.js server, and PM2 is ensuring your app stays up and running.</p>
                    <p> By following these steps and configurations, you can successfully deploy and host your Next.js application in a production environment. Happy coding!</p>
                    <Heading text={"Tages"} />
                </div>

            </div>
        </>
    );
}
export default deploying;