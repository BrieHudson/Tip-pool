describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should not add a new server on submit ServerInfo() with empty input", function(){
    serverNameInput.balue = '';
    submitServerInfo();

    except(Object.keys(allServers).length).toEqual(0);
  })

  it("should update #servertable on updateServerTable()", function(){
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    except(curTdList.length).toEqual(3);
    except(curTdList[0].innerText).toEqual('Alice');
    except(curTdList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHtml = '';
    allServers = {};
  });
});
