      <!--main content start-->
      <section id="main-content">
          <section class="wrapper">

              <!--state overview start-->
              <div class="row state-overview hidden-xs">
                  <div class="col-lg-3 col-sm-6 col-sm-offset-2">
                      <section class="panel">
                          <div class="symbol terques">
                              <i class="icon-bar-chart"></i>
                          </div>
                          <div class="value">
                              <h1>{{totalDistributed}}</h1>
                              <p>Total Distributed</p>
                          </div>
                      </section>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <section class="panel">
                          <div class="symbol red">
                              <i class="icon-check"></i>
                          </div>
                          <div class="value">
                              <h1>{{numberOfUpdates}}</h1>
                              <p>Total Number of Updates</p>
                          </div>
                      </section>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                      <section class="panel">
                          <div class="symbol blue">
                              <i class="icon-calendar"></i>
                          </div>
                          <div class="value">
                              <h1>{{daysSinceLastChecked}}</h1>
                              <p>Days since Last checked</p>
                          </div>
                      </section>
                  </div>
              </div>




<div class="row">
    <div class="col-lg-12">
        <section class="panel">
            <header class="panel-heading">
							<div class="row">
								<div class="col-xs-12">
									<div class="pull-right">
										<a href="http://lestands.com/stands/addupdate/33" class="btn btn-primary btn-xs"><i class="icon-plus"></i> Add update</a>
										<a href="http://lestands.com/stands/edit/33" class="btn btn-success btn-xs"><i class="icon-pencil"></i> Edit stand</a>
										<a class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this stand" href="http://lestands.com/stands/stand/33#deleteStand" onclick="$(&#39;#deleteStandLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/stands/deletestand/33&#39;)"><i class="icon-trash "></i> Delete stand</a>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-2 hidden-xs">
									<img src="./leStands-single_files/syr.jpg" width="150px" class="img-rounded thumbnail">
								</div>
								<div class="col-xs-10">
									<h2>University Ave. &amp; Marshall St.</h2>
									<span class="">date deployed: Aug 20, 2013</span>
									<span class="muted hidden-sm hidden-xs" style="font-style:italic; font-size:90%;">Amber's stand near SU</span>
							  </div>
							</div>
							<hr>
							<div class="row">
								<div class="col-xs-12">
									Recent updates
								</div>
							</div>
            </header>
            <div class="panel-body">
                <section id="unseen">
                  <table class="table table-bordered table-striped table-condensed">
                    <thead>
                    <tr>
                      </tr><tr>
												<th><i class="icon-calendar"></i> Date</th>
                        <th>Amount when checked</th>
                        <th>Amount added</th>
                        <th class="hidden-xs"><i class="icon-edit"></i> Comments</th>
												<th><i class="icon-bolt"></i> Actions</th>
                      </tr>

                    </thead>
                    <tbody>
											                    <tr>
												<td>Jan 23, 2014</td>
												<td>27</td>
												<td>75</td>
												<td class="hidden-xs"></td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/101&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    <tr>
												<td>Dec 16, 2013</td>
												<td>10</td>
												<td>50</td>
												<td class="hidden-xs"></td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/102&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    <tr>
												<td>Nov 22, 2013</td>
												<td>26</td>
												<td>50</td>
												<td class="hidden-xs"></td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/100&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    <tr>
												<td>Oct 10, 2013</td>
												<td>127</td>
												<td>25</td>
												<td class="hidden-xs">PETA VSK</td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/92&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    <tr>
												<td>Sep 29, 2013</td>
												<td>6</td>
												<td>125</td>
												<td class="hidden-xs">PETA VSK</td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/91&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    <tr>
												<td>Sep 13, 2013</td>
												<td>0</td>
												<td>50</td>
												<td class="hidden-xs">HSUS's new VSK</td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/90&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    <tr>
												<td>Aug 27, 2013</td>
												<td>31</td>
												<td>50</td>
												<td class="hidden-xs"></td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/89&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    <tr>
												<td>Aug 20, 2013</td>
												<td>0</td>
												<td>50</td>
												<td class="hidden-xs"></td>
                        <td class="">
																										<a href="http://lestands.com/stands/stand/33#deleteUpdate" class="btn btn-danger btn-xs" data-toggle="modal" alt="delete this update" onclick="$(&#39;#deleteUpdateLink&#39;).attr(&#39;href&#39;, &#39;http://lestands.com/updates/deleteupdate/88&#39;)"><i class="icon-trash "></i></a>
												</td>

                    </tr>
										                    </tbody>
                </table>
                </section>
            </div>
        </section>
    </div>
</div>
