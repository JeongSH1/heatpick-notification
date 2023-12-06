import dotenv from "dotenv"
import {createTunnel} from 'tunnel-ssh';

dotenv.config();

const sshOptions = {
    host: process.env.SSH_HOST,
    port: process.env.SSH_PORT,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
  };
  
  export function mySimpleTunnel(
    sshOptions,
    port,
    autoClose = true,
  ) {
    const forwardOptions = {
      srcAddr: '127.0.0.1',
      srcPort: port,
      dstAddr: '127.0.0.1',
      dstPort: port,
    };
  
    const tunnelOptions = {
      autoClose: autoClose,
    };
  
    const serverOptions = {
      port: port,
    };
  
    return createTunnel(tunnelOptions, serverOptions, sshOptions, forwardOptions);
  }
  
  export async function establishSSHconnection() {
    try {
        await mySimpleTunnel(sshOptions, 3306);
    } catch(err) {
        console.log(err);
    }
  }