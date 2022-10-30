import service from "./config.services";

const getAllTimeService = () => {
    return service.get("/average");
};

export {
    getAllTimeService
}