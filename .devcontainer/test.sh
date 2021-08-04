echo "deb http://http.us.debian.org/debian/ testing non-free contrib main" >> \
    /etc/apt/sources.list
apt update -y
apt install -y python3.9 python3-pip
update-alternatives --install /usr/bin/python python /usr/bin/python3.9 10
update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 10
