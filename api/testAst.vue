<script>
import { Basic } from "@/api/request/swagger";
import { Warehouse } from "@/api/swagger";
export default {
  methods: {
    aaa() {
      this.post({
        url: false ? Basic.getAreaList : Basic.getRegionList
      });
      this.put({
        url: Warehouse.putWarehouseCargolocationByCargoLocationIdCompleteUrl
      });
      this.get({
        url: "/api/app/product/product-pages"
      });
    }
  }
};
</script>
