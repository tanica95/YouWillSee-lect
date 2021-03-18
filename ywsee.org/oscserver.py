from pythonosc import dispatcher
from pythonosc import osc_server

IP = 'localhost'
PORT = 9999

dispatcher = dispatcher.Dispatcher()
dispatcher.map("/*", print)

server = osc_server.ThreadingOSCUDPServer(
        (IP, PORT), dispatcher)

print('Server about to start...')

server.serve_forever()
