import React, { Component } from 'react';
import { Container, Collapse, Card, CardBody, CollapseHeader } from 'mdbreact';

class AccordionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: 'collapse1'
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

  render() {
    const {collapseID} = this.state;
    return (
      <Container id="blog">
        <h3 className="responsive font-weight-bold my-5 text-center">
          Blog
        </h3>
        <hr />
        <Container className="md-accordion mt-3">
          <Card className="mt-3">
            <CollapseHeader onClick={this.toggleCollapse('collapse1')}>CentOS 7 Vagrant Box
              <i className={collapseID === 'collapse1' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
            </CollapseHeader>
            <Collapse id="collapse1" isClosed={collapseID}>
              <CardBody>
              <p>
              <strong>N.B.</strong> All commands in this tutorial have been run as the root user so if you are going to use this to create a box that will be used in a production environment please know that you must properly adjust your permissions and groups accordingly for it to actually work therefore I don't advise using this tutorial to create a production box. <br></br><br></br>
               The link below is an article that helped me when I began to learn about creating Vagrant boxes but I am not following it exactly as written because it took additional resources and some trial and error to get going down the right path during my initial attempts: <a href="https://linoxide.com/linux-how-to/setup-centos-7-vagrant-base-box-virtualbox/">CentOS 7 Vagrant base box how-to</a><br></br><br></br>
              The first order of business as you can expect is that you need to obtain a copy of CentOS 7 so that you can install and I recommend the <a href="http://isoredirect.centos.org/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-1804.iso">CentOS 7 minimal install iso</a> because the other images are overkill and one of the main goals is to keep the size of the final box small but you are free to choose a different image and the installation instructions will be very similar if not identical. Next is actually installing the image on your VirtualBox program running on your physical machine. Be sure to name it something simple that is easy for you to type so that you don't have possibly catastrophic issues (like i did... yikes!) when you type the command to pass the file's name to Vagrant to package the box after the installation and configuration steps are completed. In the settings select Linux Red Hat 64-bit and assign 512mb ram and 1-2 cpu(s) running on a dynamically allocated vdmk virtual hard drive with 30-40gb of storage. Next add an optical disk drive to the IDE controller then mount the downloaded CentOS 7 iso file onto it. Continue the install on VirtualBox by following this link: <a href="How to install CentOS 7">How to install CentOS 7</a><br></br><br></br>
             Make sure the root password is vagrant and that a user with administrator privileges is created with the username: vagrant and also set the password to: vagrant. After the installation on VirtualBox is finished log into the root user account and update the installed packages by running the following command:<br></br>
             <kbd># yum -y update</kbd><br></br><br></br> 
             I usually update the system kernel to the most recent mainline version following initial installation and after updating via the yum package manager. This can be accomplished by running the following set of commands and I will explain each one. First, run this to install a plugin for yum that shortens your package installation time by finding the fastest repository mirror to down load package files from so it is worth having installed. It is normally installed by default even on the minimal CentOS 7 installation images but you should run the command just to make sure as it won't hurt anything and it only costs a few seconds.<br></br>
             <kbd># yum -y install yum-plugin-fastestmirror</kbd> <br></br><br></br>
             The next command we will run returns information on the linux distribution and kernel version to the terminal.<br></br>
             <kbd># uname -msr</kbd><br></br><br></br>
             Run this next command to import the GPG encryption key for the el repo repository:<br></br><kbd># rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org</kbd><br></br><br></br>The next command uses the Red Hat package manager (rpm) to download and install the el repo repository .rpm file allowing us to now use yum to install the updated kernel package with dependencies.<br></br><kbd># rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm</kbd><br></br><br></br>
             <kbd># yum repolist</kbd><br></br><br></br>
             <kbd># yum --enablerepo=elrepo-kernel install kernel-ml</kbd><br></br><br></br> 
             <kbd># grub2-set-default 0</kbd><br></br><br></br>
             <kbd># grub2-mkconfig -o /boot/grub2/grub.cfg</kbd><br></br><br></br>
             <kbd># reboot yum install yum-utils package-cleanup --oldkernels</kbd><br></br><br></br>
             <kbd># yum install -y openssh-clients nano wget ntp curl # chkconfig ntpd on</kbd><br></br><br></br>
             <kbd># service ntpd stop</kbd><br></br><br></br>
             <kbd># ntpdate time.nist.gov</kbd><br></br><br></br>
             <kbd># service ntpd start</kbd><br></br><br></br>
             <kbd># service ntpd stop</kbd><br></br><br></br>
             <kbd># ntpdate time.nist.gov</kbd><br></br><br></br>
             <kbd># service ntpd start</kbd><br></br><br></br>
             <kbd># sed -i -e 's/^SELINUX=.*/SELINUX=permissive/' /etc/selinux/config</kbd><br></br><br></br>
             <kbd># useradd vagrant</kbd><br></br><br></br>
             <kbd># mkdir /home/vagrant/.ssh</kbd><br></br><br></br>
             <kbd># touch/home/vagrant/.ssh/authorized_keys</kbd><br></br><br></br>
             <kbd># chown -R vagrant:vagrant /home/vagrant/.ssh</kbd><br></br><br></br>
             <kbd># sed -i 's/^\(Defaults.*requiretty\)/#\1/' /etc/sudoers</kbd> <br></br><br></br>
             <kbd># echo "vagrant ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers</kbd><br></br><br></br>
             <kbd># vim /boot/grub2/grub.cfg</kbd><br></br><br></br> Find the line that states menu entry, find the vmlinuz line and add “net.ifnames=0 after the word “quiet”. The link below has more information as this seemed a bit tricky for me the first time I tried switching the network interface to eth0. <br></br> <a href="http://www.linuxtopic.com/2017/02/how-to-change-default-interface-name.html/">How to change the default network interface name</a><br></br><br></br> Now you must reboot your operating system which can simply be done with the reboot command as follows:<br></br><kbd># reboot</kbd><br></br><br></br> Next we will run the following commands to copy and rename the interface configuration file under the eth0 name instead of enp0s3<br></br><kbd># mv /etc/sysconfig/network-scripts/ifcfg-enp0s3 /etc/sysconfig/network-scripts/ifcfg-eth0</kbd><br></br><br></br><kbd># vim /etc/sysconfig/network-scripts/ifcfg-eth0vm</kbd> <br></br><br></br>configure network by running:<br></br> <kbd># vim /etc/sysconfig/network-scripts/ifcfg-eth0</kbd> <br></br><br></br> edit this file as such: <br></br> <code>DEVICE=eth0 <br></br> TYPE=Ethernet <br></br> ONBOOT=yes<br></br> NM_CONTROLLED=no <br></br>BOOTPROTO=dhcp</code><br></br><br></br> <kbd># reboot</kbd><br></br><br></br> <kbd># rm -f /etc/udev/rules.d/70-persistent-net.rules</kbd><br></br><br></br> <kbd># yum update</kbd> <br></br><br></br>Then, install RVM to manage Ruby and to install Ruby on Rails.<br></br><br></br><a href="https://rvm.i0"> Ruby Version Manager</a> <br></br><br></br> Next, install Node.js from source since the CentOS repositories only support Node.js version six but Heroku needs version eight or higher. I have posted a tutorial from <a href="https://digitalocean.com">DigialOcean.</a><br></br><br></br> <a href="https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server/"> Node.js on CentOS 7 tutorial</a> <br></br><br></br> Go to <a href="https://nodejs.org"> nodejs.org</a> and choose the version you want to install and download the tar.gz file.<br></br><br></br> <a href="https://nodejs.org/dist/v10.4.1/node-v10.4.1.tar.gz">Node 10.4.1</a> <br></br><br></br> <kbd># tar -xzvf node-v*</kbd> <br></br><br></br> <kbd># cd node-v*</kbd> <br></br><br></br> <kbd># yum install gcc gcc-c++</kbd> <br></br><br></br> <kbd># ./configure</kbd> <br></br><br></br> <kbd># make</kbd> <br></br><br></br> <kbd># make install</kbd> <br></br><br></br> <kbd># npm install -g heroku install</kbd> <br></br><br></br> Follow these instructions to install Docker: <br></br><a href="https://docs.docker.com/install/"> Docker Install Docs</a> <br></br><br></br> Install Ansible by running the following commands: <br></br> <kbd># yum install ansible</kbd> <br></br><br></br> Install Maven by following the instructions at the following link. <br></br><a href="https://maven.apache.org/install.html">Install Maven</a> <br></br><br></br> Optionally you can install guest additions by following the instructions in the link below. <br></br><a href="https://itekblog.com/centos-7-virtualbox-guest-additions-installation-centos-minimal/">Install Guest Additions</a></p>
            <p>
              by
                <strong> Jacob Cavazos</strong>
              , June 16 2018
            </p>
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CollapseHeader onClick={this.toggleCollapse('collapse2')}>How to Purge Nginx Pagespeed Module's Cache
              <i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
            </CollapseHeader>
            <Collapse id="collapse2" isOpen={collapseID}>
              <CardBody>
                <p>I would like to share a quick tip that is a genuinely essential component in the toolkit for anyone who uses the ngx-pagespeed module or really anyone who needs to purge an Nginx reverse proxy cache.</p>
                <p>I use prefer to use the <a href="https://centminmod.com">CentminMod</a> script which is a bash script that automates the installation, configuration, and optimization of a LEMP web server stack, and is an alternative to solutions like Cpanel or Plesk, (and cluster configurations on a more advanced level) running on CentOS 6 or 7 comprised of the Nginx web server, MariaDB database, and PHP-FPM for web sites and applications. The script has quite a bit more functionality that can be covered in a single blog post so I will be covering many of its features in future posts.</p> <p>I am actually choosing this topic to lead of the CentminMod articles due to the fact that pagespeed module for Nginx was a topic that I was extremely interested in when I began my tech journey into WordPress at the beginning of my web development career. The great thing about CentminMod is that it automates the installation from source of Nginx and includes an easy way to compile your server with Pagespeed module using a simple custom configuration file that sets flags for customizing Nginx built from source and in this way is very easy to tweak for performance and functionality. On top of this the script also automates the configuration of vhost files, caching, and the installation of WordPress web sites including free SSL certificates via the <a href="https://letsencrypt.com">LetsEncrypt</a> certificate authority.</p>
                <p>The quickest an surest way I have found to purge the Nginx Pagespeed Module's cache is to simply remove the files in the cache which if you are using the CentminMod script can be accomplished by deleting the files with the rm command</p>
                <p>
                <kbd>$ sudo rm -rf /var/ngx_pagespeed_cache/*</kbd></p>
                <p>Followed by restarting Nginx by running</p>
                <p>
                <kbd>$ sudo systemctl restart nginx</kbd></p>
                <p>Please keep in mind that your cache files may very well be in another location so make sure that you know the path to your cache files before running the rm command.</p>
                <p>by:
                  <strong> Jacob Cavazos</strong> July 14 2018
                </p>
              </CardBody>
            </Collapse>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default AccordionPage;