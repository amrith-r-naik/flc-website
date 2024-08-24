// Note: all id are capped at 9999
enum UIDType {
  PERSON = "P",
  EVENT = "E",
}

const idToUid = (id: number, year: string, uidType: UIDType) => {
  return uidType + year + "-" + id.toString().padStart(4, "0");
};

const uidToId = (pid: string, uidType: UIDType) => {
  if (!pid.startsWith(uidType)) return null;
  const numOfPid = pid.split("-")[1];
  if (!numOfPid) return null;
  const id = parseInt(numOfPid);
  if (isNaN(id)) return null;
  return id;
};

const idToPid = (id: number, year: string) => idToUid(id, year, UIDType.PERSON);
const pidToId = (pid: string) => uidToId(pid, UIDType.PERSON);

const idToEid = (id: number, year: string) => idToUid(id, year, UIDType.EVENT);
const eidToId = (eid: string) => uidToId(eid, UIDType.EVENT);

export { idToPid, pidToId, idToEid, eidToId };
