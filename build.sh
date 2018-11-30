echo -----------------------------------
echo Updating Apt-Get
echo -----------------------------------
apt-get update && apt-get -y upgrade && apt-get -y autoremove
sudo apt-get -y install git

echo -----------------------------------
echo Building Web Socket Server
echo -----------------------------------
git clone https://github.com/design-project-2018/dp-ipc-svr
mv dp-ipc-svr ipc
cd ipc
sudo python setup.py install

echo -----------------------------------
echo Building Preprocessor
echo -----------------------------------
git clone https://github.com/design-project-2018/dp-preprocessor
cd dp-preprocessor/provision
chmod u+x install_darknet.sh
./install_darknet.sh
cd provision
chmod u+x install_websocketpp.sh
./install_websocketpp.sh
cd ..
mkdir build && cd build
cmake .. && make
cd ../..

echo -----------------------------------
echo Building Prediction Model
echo -----------------------------------
git clone https://github.com/design-project-2018/dp-ml
mv dp-ml ml


