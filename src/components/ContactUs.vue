<template>
    <div class="home d-lg-flex flex-nowrap">
        <MenuBar/>

        <div class="col d-lg-flex ml-lg-5 flex-wrap text-left">
            <div class="col-12 text-left px-lg-0">
                <h1 class="text-red-1 text-uppercase font-weight-bold text-head">
                    Contact
                </h1>
            </div>

            <div class="col-12 px-0 mt-3">
                <h4>Call us</h4>
                <ul>
                    <li>+222 33 37 37 76</li>
                    <li>+222 33 37 37 76</li>
                </ul>
            </div>

            <div class="col-12 d-lg-flex d-block justify-content-lg-between pl-lg-0 mb-4">
                <div class="col-lg-9 col-12 px-0 card">
                    <div class="card-body pt-0 form-row">
                        <div class="col-12">
                            <h4>Email us</h4>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="">Service</label>
                            <select name="name" id="inputID" class="form-control">
                                <option value="">Inquiries</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="">Your Phone</label>
                            <input type="text" class="form-control" placeholder="Enter your phone number">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="">Your Name</label>
                            <input type="text" class="form-control" placeholder="Enter your full name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="">Your Email</label>
                            <input type="text" class="form-control" placeholder="Enter your email">
                        </div>
                        <div class="form-group col-12">
                            <label for="">Country</label>
                            <select name="name" id="inputID" class="form-control">
                                <option value="">Mauritania</option>
                            </select>
                        </div>
                        <div class="form-group col-12">
                            <label for="">Message</label>
                            <textarea class="form-control" rows="6"></textarea>
                        </div>

                        <button class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MenuBar from './MenuBar';

    export default {
        components: {MenuBar},
    }
</script>
